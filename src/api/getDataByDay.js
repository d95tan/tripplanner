import eachDayOfInterval from "date-fns/eachDayOfInterval";
import isSameDay from "date-fns/isSameDay";
import { getTripData } from "./getTripData";

export async function getDataByDay(project) {

    const data = await getTripData(project);

    const datesArr = eachDayOfInterval({ start: data.start, end: data.end });

    // console.log(accomsArr);

    let sorted = datesArr.map((date) => {
        return {
            date,
            events: data.events.filter((event) => isSameDay(event.date, date)),
            accoms: data.info.accoms
                .filter((accom) => {
                    for (const d of accom.datesArr) {
                        if (isSameDay(date, d)) {
                            return true;
                        }
                    }
                }).map(accom => {
                    return {
                        ...accom,
                        timeIn: (isSameDay(accom.start, date)) ? accom.timeIn : null,
                        timeOut: (isSameDay(accom.end, date)) ? accom.timeOut : null
                    }
                }),
            flights: data.info.flights.filter(flight => isSameDay(flight.date, date)),   // TODO: needs more logic for overnight flights
            weather: data.weather.filter(day => isSameDay(day.date, date))[0],
            
        };
    });
    // accoms: data.info.accoms.filter((accom)) => accom.date

    console.log(sorted);
    return sorted;
}
