import eachDayOfInterval from "date-fns/eachDayOfInterval";
import isEqual from "date-fns/isEqual";
import isSameDay from "date-fns/isSameDay";

export function sortData(data) {
    const datesArr = eachDayOfInterval({ start: data.start, end: data.end });

    const accomsArr = [];

    for (const a of data.info.accoms) {
        accomsArr.push({
            name: a.name,
            dateArr: eachDayOfInterval({start: a.start, end: a.end})
        })
    }
    console.log(accomsArr);

    let sorted = datesArr.map((date) => {
        return {
            date,
            events: data.events.filter((event) => isEqual(event.date, date))
            accoms: accomsArr.filter((accom) => {
                for (d of accom.dateArr) {
                    if (isSameDay(date, d)) {
                        return {name: accom.name, start: datesArr[0], end: datesArr[-1]}
                    }
                }
            })
            // accoms: data.info.accoms.filter((accom)) => accom.date
        };
    });
    return sorted;

}
