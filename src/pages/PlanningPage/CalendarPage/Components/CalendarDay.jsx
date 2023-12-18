import Card from "react-bootstrap/Card";
import CalendarItem from "./CalendarItem";
import { SLOT_HEIGHT } from "../../../../config";
import { format } from "date-fns";

export default function CalendarDay({ date, events, accoms, flights, weather }) {
    const dateString = format(date, "eee, do MMM yy")
    const weatherString = `H: ${weather.high}, L:${weather.low} ${weather.weatherString? weather.weatherString: ""}`

    const calculatePosition = (start, duration) => {
        const top = (SLOT_HEIGHT * parseInt(start)) / 100;
        const height = SLOT_HEIGHT * duration / 2;
        return {top, height}
    };

    return (
        <Card bg="light" className="calendar-day-card">
            <Card.Body className="calendar-day-body">
                <Card.Title as="p">
                    {dateString}
                </Card.Title>
                <Card.Subtitle as="p" style={{ fontSize: "xx-small" }}>
                    {weatherString}
                </Card.Subtitle>
                <div className="calendar-items-container">
                {events.map((e) => {
                    const { top, height } = calculatePosition(e.time, e.duration)
                        return <CalendarItem
                            key={e.time}
                            data={e}
                            type="events"
                            bg="primary"
                            style= {{position: "absolute", top: `${top}rem`, height: `${height}rem`, boxShadow: "-1px -1px 5px lightblue inset"}}
                        />
                })}
                {flights.map((e) => {
                    const { top, height } = calculatePosition(e.time, e.duration)
                        return <CalendarItem
                            key={e.time}
                            data={e}
                            type="flights"
                            bg="success"
                            style= {{position: "absolute", top: `${top}rem`, height: `${height}rem`, boxShadow: "-1px -1px 5px lightgreen inset"}}
                        />
                })}
                    {accoms.map((e) => {

                        //TODO: add accoms info at bottom of day or something
                        if (e.timeIn === null && e.timeOut === null) {
                            return;
                    }
                    const { top, height } = calculatePosition(e.timeIn || e.timeOut, 2)
                        return <CalendarItem
                            key={e.name}
                            data={e}
                            type="accoms"
                            bg="secondary"
                            style= {{position: "absolute", top: `${top}rem`, height: `${height}rem`, boxShadow: "-1px -1px 3px lightgrey inset"}}
                        />
                })}
                
                </div>
            </Card.Body>
        </Card>
    );
}
