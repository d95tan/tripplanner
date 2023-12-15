import Card from "react-bootstrap/Card";
import CalendarItem from "./CalendarItem";
import { SLOT_HEIGHT } from "../../../../config";

export default function CalendarDay({ day, date, events }) {
    const calculatePosition = (start, duration) => {
        const top = (SLOT_HEIGHT * parseInt(start)) / 10;
        const height = SLOT_HEIGHT * duration / 2;
        return {top, height}
    };

    return (
        <Card border="primary" className="calendar-day-card">
            <Card.Body className="calendar-day-body">
                <Card.Title as="p">
                    {day}, {date}
                </Card.Title>
                <div className="calendar-items-container">
                {events.map((e) => {
                    const { top, height } = calculatePosition(e.time, e.duration)
                        return <CalendarItem
                            key={e.time}
                            name = { e.name }
                            address = { e.address }
                            time={e.time}
                            duration={e.duration}
                            style= {{position: "absolute", top: `${top}rem`, height: `${height}rem`}}
                        />
                })}
                </div>
            </Card.Body>
        </Card>
    );
}
