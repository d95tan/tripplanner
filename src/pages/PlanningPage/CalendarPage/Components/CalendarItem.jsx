import Card from "react-bootstrap/Card"

export default function CalendarItem({name, address, time, duration, style}) {
    return <Card className="calendar-card" border="secondary" style={style}>
        <Card.Body style={{padding:"2px", lineHeight:"0"}}>
            <Card.Title className="calendar-card-title">{name}</Card.Title>
            {duration > 2 ? <Card.Text className="calendar-card-text">
                {address}
            </Card.Text> : <></>}
        </Card.Body>
    </ Card>
}