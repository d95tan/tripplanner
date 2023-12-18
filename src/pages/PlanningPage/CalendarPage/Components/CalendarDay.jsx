import Card from "react-bootstrap/Card";
import CalendarItem from "./CalendarItem";
import { SLOT_HEIGHT } from "../../../../config";
import { format } from "date-fns";

export default function CalendarDay({ date, events, accoms, flights, weather }) {
    const dateString = format(date, "eee, do MMM yy")
    const weatherString = `H: ${weather.high}, L:${weather.low}`

    const calculatePosition = (start, duration) => {
        const top = (SLOT_HEIGHT * parseInt(start)) / 100;
        const height = SLOT_HEIGHT * duration / 2;
        return {top, height}
    };

    return (
        <Card border="primary" className="calendar-day-card">
            <Card.Body className="calendar-day-body">
                <Card.Title as="p">
                    {dateString}
                </Card.Title>
                {/* <Card.Subtitle as="p" style={{ fontSize: "xx-small" }}>
                    {weatherString}
                </Card.Subtitle> */}
                <div className="calendar-items-container">
                {events.map((e) => {
                    const { top, height } = calculatePosition(e.time, e.duration)
                        return <CalendarItem
                            key={e.time}
                            data = {e}
                            bg="primary"
                            style= {{position: "absolute", top: `${top}rem`, height: `${height}rem`}}
                        />
                })}
                {flights.map((e) => {
                    const { top, height } = calculatePosition(e.time, e.duration)
                        return <CalendarItem
                            key={e.time}
                            data = {e}
                            bg="success"
                            style= {{position: "absolute", top: `${top}rem`, height: `${height}rem`}}
                        />
                })}
                    {accoms.map((e) => {

                        //TODO: add accoms info at bottom of day or something
                        if (e.timeIn === null && e.timeOut === null) {
                            return;
                    }
                    const { top, height } = calculatePosition(e.timeIn || e.timeOut, e.duration)
                        return <CalendarItem
                            key={e.time}
                            data = {e}
                            bg="primary"
                            style= {{position: "absolute", top: `${top}rem`, height: `${height}rem`}}
                        />
                })}
                
                </div>
            </Card.Body>
        </Card>
    );
}
