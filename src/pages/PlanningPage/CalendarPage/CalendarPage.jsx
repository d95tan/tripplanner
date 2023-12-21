import { useState } from "react";
import { useOutletContext } from "react-router-dom";
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
        const body = formatRecordBody({
            ...eventInfo,
            type: "events",
            date: dateToAirtableDate(eventInfo.date),
        });
        const response = await airtableApi(project, "POST", body);
        // console.log(response);
        const tmp = [...data];
        tmp.forEach((day) => {
            if (
                isSameDay(airtableDateToDate(response?.fields?.date), day.date)
            ) {
                const fields = response?.fields;
                day.events.push({
                    name: fields.name,
                    date: airtableDateToDate(fields.date),
                    time: fields.time,
                    duration: fields.duration,
                    place: fields.place,
                    id: response.id,
                });
                setData(tmp);
                return;
            }
        });
    };

    const editEvent = async (eventInfo) => {
        const body = formatRecordBody({
            ...eventInfo,
            date: dateToAirtableDate(eventInfo.date),
        });
        const response = await airtableApi(
            project,
            "PATCH",
            body,
            eventInfo.id
        );
        console.log(response);
        const tmp = structuredClone(data);
        const fields = await response.fields;

        for (let i = 0; i < tmp.length; i++) {
            if (isSameDay(airtableDateToDate(fields?.date), tmp[i].date)) {
                for (let j = 0; j < tmp[i].events.length; j++) {
                    if (tmp[i].events[j].id === response.id) {
                        const updated = {
                            name: fields.name,
                            type: fields.type?.[0],
                            place: fields.place,
                            date: airtableDateToDate(fields.date),
                            time: fields.time,
                            duration: fields.duration,
                            id: response.id,
                        };
                        console.log(updated);
                        tmp[i].events[j] = { ...updated };
                        setData(tmp);
                        return;
                    }
                }
            }
        }
    };

    const deleteEvent = async (id) => {
        const response = await airtableApi(
            project,
            "DELETE",
            "",
            id
        )
        console.log(response);
        const tmp = structuredClone(data);
        for (let i = 0; i < tmp.length; i++) {
            for (let j = 0; j < tmp[i].events.length; j++) {
                if (tmp[i].events[j].id === id) {
                    tmp[i].events.splice(j, 1);
                    setData(tmp);
                    return;
                }
            }
        }
    }

    return (
        <>
            <div className="calendar-container">
                <h2>{project}</h2>
                <CalendarTimeBar />
                {data.map((d) => (
                    <CalendarDay
                        key={d.date}
                        date={d.date}
                        events={d.events}
                        accoms={d.accoms}
                        flights={d.flights}
                        weather={d.weather}
                        newEvent={newEvent}
                        setNewEvent={setNewEvent}
                        addNewEvent={addNewEvent}
                        editEvent={editEvent}
                        deleteEvent={deleteEvent}
                    />
                ))}
            </div>
        </>
    );
}
