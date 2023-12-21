import Card from "react-bootstrap/Card";
import CalendarItem from "./CalendarItem";
import {
    PXinREM,
    SLOT_HEIGHT,
    calculatePosition,
    intToTime,
    noClash
} from "../../../../config";
import { format } from "date-fns";

export default function CalendarDay({
    date,
    events,
    accoms,
    flights,
    weather,
    newEvent,
    setNewEvent,
    addNewEvent,
    editEvent,
    deleteEvent,
}) {
    const dateString = format(date, "eee, do MMM yy");
    const weatherString = `H: ${weather.high}, L:${weather.low} ${weather.weatherString ? weather.weatherString : ""
        }`;

    const handleClick = (e) => {
        // console.log(e.target)
        if (e.target.id !== "calendar-day-card") {
            return
        }
        
        const time = parseInt(
            (100 *
                (e.pageY -
                    e.target.offsetTop -
                    e.target.children[0].offsetHeight)) /
            (PXinREM * SLOT_HEIGHT)
        );
        let roundedTime = intToTime(Math.round(time / 50) * 50);
        const { top, height } = calculatePosition(roundedTime, 2);

        if (noClash(roundedTime, events, flights)) {
            setNewEvent({
                data: {
                    name: "Click to add event",
                    date,
                    place: "",
                    time: roundedTime,
                    duration: 2,
                },
                top,
                height,
            });
        }
    }

        return (
            <Card
                bg="light"
                className="calendar-day-card"
                onClick={handleClick}
                id="calendar-day-card"
            >
                <Card.Body className="calendar-day-body">
                    <Card.Title as="p">{dateString}</Card.Title>
                    <Card.Subtitle as="p" style={{ fontSize: "xx-small" }}>
                        {weatherString}
                    </Card.Subtitle>
                    <div className="calendar-items-container">
                        {newEvent && newEvent.data.date === date ? (
                            <CalendarItem
                                data={newEvent.data}
                                type="newEvent"
                                setNewEvent={setNewEvent}
                                addNewEvent={addNewEvent}
                                style={{
                                    position: "absolute",
                                    top: `${newEvent.top}rem`,
                                    height: `${newEvent.height}rem`,
                                    boxShadow: "-1px -1px 5px lightblue inset",
                                }}
                            />
                        ) : null}
                        
                        {events.map((e) => {
                            const { top, height } = calculatePosition(
                                e.time,
                                e.duration
                            );
                            return (
                                <CalendarItem
                                    key={e.time}
                                    data={e}
                                    type="events"
                                    editEvent={editEvent}
                                    deleteEvent={deleteEvent}
                                    style={{
                                        position: "absolute",
                                        top: `${top}rem`,
                                        height: `${height}rem`,
                                        boxShadow: "-1px -1px 5px lightblue inset",
                                    }}
                                />
                            );
                        })}

                        {flights.map((e) => {
                            const { top, height } = calculatePosition(
                                e.time,
                                e.duration
                            );
                            return (
                                <CalendarItem
                                    key={e.time}
                                    data={e}
                                    type="flights"
                                    editEvent={editEvent}
                                    deleteEvent={deleteEvent}
                                    style={{
                                        position: "absolute",
                                        top: `${top}rem`,
                                        height: `${height}rem`,
                                        boxShadow: "-1px -1px 5px lightgreen inset",
                                    }}
                                />
                            );
                        })}

                        {accoms.map((e) => {
                            //TODO: add accoms info at bottom of day or something
                            if (e.timeIn === null && e.timeOut === null) {
                                return;
                            }
                            const { top, height } = calculatePosition(
                                e.timeIn || e.timeOut,
                                2
                            );
                            return (
                                <CalendarItem
                                    key={e.name}
                                    data={e}
                                    type="accoms"
                                    editEvent={editEvent}
                                    deleteEvent={deleteEvent}
                                    style={{
                                        position: "absolute",
                                        top: `${top}rem`,
                                        height: `${height}rem`,
                                        boxShadow: "-1px -1px 3px lightgrey inset",
                                    }}
                                />
                            );
                        })}
                    </div>
                    {(accoms.length !== 1 ? accoms.filter(a => a.timeIn !== null) : accoms).map((e) => {
                            return (
                                <CalendarItem
                                    key={e.name}
                                    data={{...e, duration: 3}}
                                    type="accomsInfo"
                                    editEvent={editEvent}
                                    deleteEvent={deleteEvent}
                                    style={{
                                        position: "absolute",
                                        top: `39.7rem`,
                                        height: `3rem`,
                                        boxShadow: "-1px -1px 3px lightgrey inset",
                                    }}
                                />
                            );
                        })}
                </Card.Body>
            </Card>
        );
    }
