import Card from "react-bootstrap/Card"

export default function CalendarItem({ data, type, style }) {
    
    const background = {
        events: "primary",
        flights: "success",
        accoms: "secondary"
    }

    return <Card className="calendar-card" border="secondary" style={style} bg={background[type]}>
        <Card.Body style={{padding:"2px", lineHeight:"0"}}>
            <Card.Title className="calendar-card-title">
                {data.timeIn ? <>Check-in at {data.name}</> :
                    data.timeOut ? <>Check-out at {data.timeOut}</> : <>{data.name}</>}
            </Card.Title>
            
            {data.duration > 2 ? <Card.Text className="calendar-card-text">
                {data.place}
            </Card.Text> : <></>}
            {type === "flights" ?
                <Card.Text className="calendar-card-text">
                    {data.dep} ➡️ {data.arr}
                </Card.Text> :
                <></>}
        </Card.Body>
    </ Card>
}