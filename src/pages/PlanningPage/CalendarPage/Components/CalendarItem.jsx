import Card from "react-bootstrap/Card"

export default function CalendarItem({ name, place, duration, style, bg}) {
    return <Card className="calendar-card" border="secondary" style={style} bg={bg}>
        <Card.Body style={{padding:"2px", lineHeight:"0"}}>
            <Card.Title className="calendar-card-title">{name}</Card.Title>
            {duration > 2 ? <Card.Text className="calendar-card-text">
                {place}
            </Card.Text> : <></>}
        </Card.Body>
    </ Card>
}