import { useState } from "react";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import CalendarItemPopover from "./CalendarItemPopover";
import NewCalendarItemPopover from "./NewCalendarItemPopover";
import Badge from "react-bootstrap/Badge";

export default function CalendarItem({
    data,
    type,
    style,
    setNewEvent,
    addNewEvent,
    editEvent,
    deleteEvent,
}) {
    const background = {
        events: "primary",
        newEvent: "info",
        flights: "success",
        accoms: "secondary",
        accomsInfo: "secondary"
    };

    const [edit, setEdit] = useState(false);

    const [showPopover, setShowPopover] = useState(false);

    const toggleShow = (show) => {
        setShowPopover(show);
    };

    const renderPopover = (props) => {
        if (type === "newEvent") {
            return (
                <Popover
                    id="popover-newEvent"
                    className="calendar-item-popover"
                    {...props}
                >
                    <NewCalendarItemPopover
                        time={data.time}
                        date={data.date}
                        type={"newEvent"}
                        showPopover={showPopover}
                        setShowPopover={setShowPopover}
                        addNewEvent={addNewEvent}
                        editEvent={editEvent}
                    />
                </Popover>
            );
        } else if (type === "accomsInfo") {
            return;
        } else if (edit) {
            setShowPopover(true);
            return (
                <Popover
                    id="popover-newEvent"
                    className="calendar-item-popover"
                    {...props}
                >
                    <NewCalendarItemPopover
                        oldName={data.name}
                        type={type}
                        time={data.time || data.timeIn || data.timeOut}
                        duration={data.duration || 2}
                        date={data.date}
                        oldPlace={data.place}
                        id={data.id}
                        setShowPopover={setShowPopover}
                        showPopover={showPopover}
                        setEdit={setEdit}
                        editEvent={editEvent}
                        deleteEvent={deleteEvent}
                    />
                </Popover>
            );
        }
        return (
            <Popover
                id="popover-basic"
                className="calendar-item-popover"
                {...props}
            >
                <CalendarItemPopover data={data} type={type} />
            </Popover>
        );
    };

    const handleBadge = () => {
        if (type !== "newEvent") {
            setEdit(!edit);
        } else {
            setNewEvent(null);
        }
    };

    return (
        <>
            <OverlayTrigger
                placement="auto"
                delay={{ show: 250, hide: 400 }}
                overlay={renderPopover}
                defaultShow={showPopover}
                show={showPopover}
                onToggle={toggleShow}
                trigger={
                    type === "newEvent" || edit ? "click" : type === "accomsInfo" ? [] : ["hover", "focus"]
                }
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
                            <div
                                className="calendar-card-title-div"
                                id={type === "newEvent" ? "new-event" : ""}
                            >
                                {type !== "accomsInfo" ? data.timeIn ? (
                                    <>Check-in at {data.name}</>
                                ) : data.timeOut ? (
                                    <>Check-out from {data.name}</>
                                ) : (
                                    <>{data.name}</>
                                ) : (
                                    <>Stay at: {data.name}</> 
                                )}
                            </div>
                            {type === "events" || type === "newEvent" ? (
                                <Badge
                                    onClick={handleBadge}
                                    className="calendar-card-title-badge"
                                    pill
                                    bg={type !== "accoms" ? "dark" : "light"}
                                    text={type !== "accoms" ? "light" : "dark"}
                                >
                                    {type === "newEvent" ? "X" : "Edit"}
                                </Badge>
                            ) : (
                                <></>
                            )}
                            <br />
                        </Card.Title>

                        {data.duration > 2 ? (
                            type === "flights" ? (
                                <Card.Text className="calendar-card-text">
                                    {data.dep} ➡️ {data.arr}
                                </Card.Text>
                            ) : (
                                <Card.Text className="calendar-card-text">
                                    {data.place}
                                </Card.Text>
                            )) : (<></>)}
                            
                    </Card.Body>
                </Card>
            </OverlayTrigger>
        </>
    );
}
