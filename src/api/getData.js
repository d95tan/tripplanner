import { airtableService } from "./Airtable/AirtableService";
import { geocodifyLatLong } from "./Geocodify/geocodifyService";
import { sortData } from "./sortData";

function getDateString(arr) {
    const YYYY = arr[0].toString();
    const MM = arr[1] < 10 ? "0" + arr[1] : arr[1];
    const DD = arr[2] < 10 ? "0" + arr[2] : arr[2];
    const HH = arr[3] < 10 ? "0" + arr[3] : arr[3];
    const mm = arr[4] < 10 ? "0" + arr[4] : arr[4];


    return `${YYYY}-${MM}-${DD}T${HH}:${mm}`
}

export async function getData(project) {
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
            start = new Date(JSON.parse(date)[0].join(","))
            end = new Date(JSON.parse(date)[1].join(","))
        }
        else if (type === "event") {
            events.push({
                name,
                date: new Date(JSON.parse(date).join(",")),
                place,
                time,
                duration,
            })
        }
        else if (type === "info-flight") {
            flights.push({
                name,
                date: new Date(JSON.parse(date).join(",")),
                dep: JSON.parse(place)[0],
                arr: JSON.parse(place)[1],
                time,
                duration,
            })
        }
        else if (type === "info-accoms") {
            console.log(JSON.parse(date)[0]);
            const startString = getDateString(JSON.parse(date)[0]);
            const endString = getDateString(JSON.parse(date)[1]);
            
            // console.log((JSON.parse(date)[0].join(",")));
            accoms.push({
                name,
                start: new Date(startString),
                end: new Date(endString),
                place
            })
        }
    }

    
    
    const data = {
        start,
        end,
        events,
        info
    };

    const sortedData = sortData(data);

    console.log(sortedData);

    return data;

    // (async function () {
    //         const coord = await geocodifyLatLong(project);
    //         console.log(coord)
    //     })();

    // const events = [
    //     { name: "midnight", address: "hotel", date: new Date(2023, 11, 25,0,0), duration: 2 },
    //     { name: "Lunch at Woolies", address: "152 Jane St",date: new Date(2023, 11, 25,12,0), duration: 2 },
    //     { name: "Dinner at Macs", address: "123 Jane St",date: new Date(2023, 11, 25, 19,0), duration: 3 }
    // ]

    // const accoms = [
    //     { name: "Hotel California", address: "Not california", in: new Date(2023, 11, 25, 15, 0), out: new Date(2023, 11, 28, 11, 30) },
    //     { name: "Mercure", address: "Venus", in: new Date(2023, 11, 28, 15, 0), out: new Date(2023, 11, 31, 11, 30) },
    // ]

    // const flights = [
    //     { name: "TR2", from: "SIN", to: "SYD", in: new Date(2023, 11, 25, 1, 0), out: new Date(2023, 11, 25, 9, 0) },
    //     { name: "TR3", from: "SYD", to: "SIN", in: new Date(2023, 11, 31, 15, 0), out: new Date(2023, 11, 25, 23, 30) }
    // ]
    
    // const data = {
    //     start: new Date(2023, 11, 25),
    //     end: new Date(2023, 11, 31),
    //     events,
    //     info: {
    //         coordinates: { lat: -33.75, long: 151.125 },
    //         accoms,
    //         flights,
    //     }
    // }
}