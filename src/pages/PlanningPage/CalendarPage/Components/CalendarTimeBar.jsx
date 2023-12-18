import Card from "react-bootstrap/Card"
import { SLOT_HEIGHT } from "../../../../config";

const time = [];

for (let i = 0; i < 24; i++) {
    time.push(i + ":00");
}

export default function CalendarTimeBar() {
    return <Card border="primary" className="calendar-day-card" style={{ width: "4rem" }}>
        <Card.Body className="calendar-timebar-body">
            <Card.Title as="p">Time</Card.Title>
            <Card.Subtitle as="p" style={{ fontSize: "xx-small" }}>
                    Weather
                </Card.Subtitle>
            {time.map((hour) => <Card.Text key={hour} style={{ marginBottom: "0px", height: `${SLOT_HEIGHT}rem`}}>{hour}</Card.Text>)}
        </Card.Body>
    </Card>
}