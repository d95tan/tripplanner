// TODO: get exchange rate

import { airtableService } from "./Airtable/airtableService";
import { geocodifyLatLong } from "./Geocodify/geocodifyService";
import { openMeteoService } from "./OpenMeteo/openMeteoService"

import { format } from "date-fns";
import eachDayOfInterval from "date-fns/eachDayOfInterval";

function getDateString(arr) {
    const YYYY = arr[0].toString();
    const MM = arr[1] < 10 ? "0" + arr[1] : arr[1];
    const DD = arr[2] < 10 ? "0" + arr[2] : arr[2];
    const HH = arr[3] < 10 ? "0" + arr[3] : arr[3];
    const mm = arr[4] < 10 ? "0" + arr[4] : arr[4];


    return `${YYYY}-${MM}-${DD}T${HH}:${mm}`
}

export async function getTripData(project) {
    let start, end;
    const events = []
    const accoms = [];
    const flights = [];
    const coords = await geocodifyLatLong(project);
    const info = {flights, accoms, coords}
    // console.log("getData");
    
    const raw = await airtableService(project, "GET");
    for (const item of raw.records) {
        const name = item.fields.name;
        const type = item.fields.type?.[0];
        const date = item.fields.date;
        const place = item.fields.place || "nil";
        const time = item.fields.time || "nil";
        const duration = item.fields.duration || "nil";
        
        // console.log(item);
        if (type === "dates") {
            start = new Date(JSON.parse(date)[0].join("-"))
            end = new Date(JSON.parse(date)[1].join("-"))
        }
        else if (type === "event") {
            events.push({
                name,
                date: new Date(JSON.parse(date).join("-")),
                place,
                time,
                duration,
            })
        }
        else if (type === "info-flight") {
            flights.push({
                name,
                date: new Date(JSON.parse(date).join("-")),
                dep: JSON.parse(place)[0],
                arr: JSON.parse(place)[1],
                time,
                duration,
            })
        }
        else if (type === "info-accoms") {
            // console.log(JSON.parse(date)[0]);
            const startString = getDateString(JSON.parse(date)[0]);
            const endString = getDateString(JSON.parse(date)[1]);
            const start = new Date(startString);
            const end = new Date(endString);
            // console.log((JSON.parse(date)[0].join(",")));
            accoms.push({
                name,
                start,
                end,
                datesArr: eachDayOfInterval({ start, end }),
                timeIn: parseInt(format(start, "Hmm")),
                timeOut: parseInt(format(end, "Hmm")),
                place
            })
        }
    }

    const weather = await openMeteoService(coords, start, end);

    const data = {
        start,
        end,
        events,
        info,
        weather,
    };
    return data;
}