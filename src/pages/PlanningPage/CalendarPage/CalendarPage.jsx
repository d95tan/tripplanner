import { useState } from "react";
import { useOutletContext } from "react-router-dom"
import CalendarTimeBar from "./Components/CalendarTimeBar";
import CalendarDay from "./Components/CalendarDay";
import { isSameDay } from "date-fns";
import { formatRecordBody } from "../../../api/Airtable/airtableService";
import { airtableApi } from "../../../api/Airtable/airtableApi";
import { airtableDateToDate, dateToAirtableDate } from "../../../config";

export default function CalendarPage() {
    const [data, setData, project] = useOutletContext();
    const [newEvent, setNewEvent] = useState(null);
    
    const addNewEvent = async (eventInfo) => {
        const body = formatRecordBody({ ...eventInfo, type: "event", date: dateToAirtableDate(eventInfo.date)})
        const response = await airtableApi(project, "POST", body)
        // console.log(response);
        const tmp = [...data]
        tmp.forEach(day => {
            if (isSameDay(airtableDateToDate(response?.fields?.date), day.date)) {
                const fields = response?.fields;
                day.events.push({
                    name: fields.name,
                    date: airtableDateToDate(fields.date),
                    time: fields.time,
                    duration: fields.duration,
                    place: fields.place
                });
                setData(tmp);
            }
        })
    }

    return (
        <>
            <div className="calendar-container">
                <h2>{project}</h2>
                <CalendarTimeBar />
                {data.map(d => <CalendarDay
                    key={d.date}
                    date={d.date}
                    events={d.events}
                    accoms={d.accoms}
                    flights={d.flights}
                    weather={d.weather}
                    addNewEvent={addNewEvent}
                    newEvent={newEvent}
                    setNewEvent={setNewEvent}
                />)}
            </div>
        </>
    );
}
