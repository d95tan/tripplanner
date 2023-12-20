import { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { formatAirtableTime, getEndTime } from "../../../../config";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

export default function CalendarItem({ data, type, style }) {
    const background = {
        events: "primary",
        newEvent: "info",
        flights: "success",
        accoms: "secondary",
    };

    const [show, setShow] = useState(false);

    const target = useRef(null);

    const renderPopover = (props) => {
        if (type === "newEvent") {
            return <></>;
        }
        return (
        <Popover id="popover-basic" class="calendar-item-popover" {...props}>
            <Popover.Header as="h3">
                {data.timeIn ? (
                    <>Check-in at {data.name}</>
                ) : data.timeOut ? (
                    <>Check-out from {data.name}</>
                ) : (
                    <>{data.name}</>
                )}
            </Popover.Header>
            <Popover.Body as="p" className="calendar-item-popover-body">
                    {data.time ? "Time: " + formatAirtableTime(data.time, "AMPM") + " to " + formatAirtableTime(getEndTime(data.time, data.duration),"AMPM"):
                    data.timeIn ? "Check in time: " + formatAirtableTime(data.timeIn, "AMPM") :
                    "Check out time: " + formatAirtableTime(data.timeOut, "AMPM")}
                <br />
                {data.place? "Address: " + data.place: ""}
                {type === "flights" ? (
                        <>
                            Departure: {data.dep} <br />
                            Arrival: {data.arr}
                        </>
                ) : (
                    null
                )}
            </Popover.Body>
        </Popover>)
    }

    return (
        <>
            <OverlayTrigger
                placement="auto"
                delay={{ show: 250, hide: 400 }}
                overlay={renderPopover}
            >
                <Card
                    className="calendar-card"
                    border={background[type]}
                    text={type === "newEvent" ? "secondary" : "light"}
                    bg={background[type]}
                    style={style}
                    onMouseOver={() => setShow(!show)}
                    ref={target}
                >
                    <Card.Body style={{ padding: "2px", lineHeight: "0" }}>
                        <Card.Title className="calendar-card-title">
                            {data.timeIn ? (
                                <>Check-in at {data.name}</>
                            ) : data.timeOut ? (
                                <>Check-out from {data.name}</>
                            ) : (
                                <>{data.name}</>
                            )}
                        </Card.Title>

                        {data.duration > 2 ? (
                            <Card.Text className="calendar-card-text">
                                {data.place}
                            </Card.Text>
                        ) : (
                            <></>
                        )}
                        {type === "flights" ? (
                            <Card.Text className="calendar-card-text">
                                {data.dep} ➡️ {data.arr}
                            </Card.Text>
                        ) : (
                            <></>
                        )}
                    </Card.Body>
                </Card>
            </OverlayTrigger>
        </>
    );
}
