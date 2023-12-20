import { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import CalendarItemPopover from "./CalendarItemPopover";
import NewCalendarItemPopover from "./NewCalendarItemPopover";

export default function CalendarItem({ data, type, style, addNewEvent }) {
    const background = {
        events: "primary",
        newEvent: "info",
        flights: "success",
        accoms: "secondary",
    };

    const [showPopover, setShowPopover] = useState(false);

    const toggleShow = (show) => {
        setShowPopover(show);
    }

    const renderPopover = (props) => {
        if (type === "newEvent") {
            return (
                <Popover id="popover-newEvent" className="calendar-item-popover" {...props}>
                    <NewCalendarItemPopover
                        time={data.time}
                        date={data.date}
                        addNewEvent={addNewEvent}
                        setShowPopover={setShowPopover}
                        showPopover={showPopover}
                    />
                </Popover>
                );
            }
        return (
            <Popover id="popover-basic" className="calendar-item-popover" {...props}>
                <CalendarItemPopover data={data} type={type} />
            </Popover>
        )
    }

    return (
        <>
            <OverlayTrigger
                placement="auto"
                delay={{ show: 250, hide: 400 }}
                overlay={renderPopover}
                defaultShow={showPopover}
                show={showPopover}
                onToggle={toggleShow}
                trigger={type === "newEvent" ? "click": ["hover", "focus"]}
            >
                <Card
                    className="calendar-card"
                    border={background[type]}
                    text={type === "newEvent" ? "secondary" : "light"}
                    bg={background[type]}
                    style={style}
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
