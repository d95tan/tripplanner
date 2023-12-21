import Card from "react-bootstrap/Card";
import CalendarItem from "./CalendarItem";
import {
    PXinREM,
    SLOT_HEIGHT,
    calculatePosition,
    intToTime,
} from "../../../../config";
import { format } from "date-fns";
import { useState } from "react";

export default function CalendarDay({
    date,
    events,
    accoms,
    flights,
    weather,
    addNewEvent,
    newEvent,
    setNewEvent,
}) {
    const dateString = format(date, "eee, do MMM yy");
    const weatherString = `H: ${weather.high}, L:${weather.low} ${
        weather.weatherString ? weather.weatherString : ""
    }`;

    // TODO: checks if the new event clashes (perhaps should be outsourced to config file)
    const noClash = (time, events, flights) => {
        return true;
    };

    const handleClick = (e) => {
        if (e.target.id === "calendar-day-card") {
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
            return;
        } else if (e.target.id === "new-event") {
            return;
        } else {
            setNewEvent(null);
            return;
        }
    };

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
            </Card.Body>
        </Card>
    );
}
