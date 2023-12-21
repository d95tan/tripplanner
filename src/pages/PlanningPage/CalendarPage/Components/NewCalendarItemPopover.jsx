import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import {
    timeToInputTime,
    inputTimeToTime,
    getDuration,
} from "../../../../config";
import { useState } from "react";

export default function NewCalendarItemPopover({
    oldName,
    type,
    date,
    oldPlace,
    time,
    duration,
    id,
    editEvent,
    setShowPopover,
    showPopover,
    addNewEvent,
    setEdit,
}) {
    const [info, setInfo] = useState({
        name: oldName || "",
        type,
        date: date,
        place: oldPlace || "",
        time: timeToInputTime(time),
        end: duration
            ? timeToInputTime(time + duration * 50)
            : timeToInputTime(time + 100),
        id: id || "",
    });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        // TODO: Check if end time is after start (duration > 1, i.e. >= 1h)
        // TODO: Round end time to nearest half hour.
        const eventInfo = {
            name: info.name,
            date: info.date,
            place: info.place,
            time: inputTimeToTime(info.time),
            duration: getDuration(info.time, info.end),
            type: info.type,
            id: info.id,
        };
        return eventInfo;
    };

    const handleCreate = (e) => {
        const createInfo = handleClick(e);
        createInfo.type = "event"
        console.log(createInfo)
        addNewEvent(createInfo);
        setShowPopover(!showPopover);
    };

    const handleEdit = (e) => {
        const editInfo = handleClick(e);
        // console.log(editInfo);
        editEvent(editInfo);
        setEdit(false);
        setShowPopover(!showPopover);
    };

    return (
        <>
            <Popover.Header as="h3">
                Title:{" "}
                <input
                    name="name"
                    type="text"
                    value={info.name}
                    placeholder="Visit the Museum"
                    onChange={handleChange}
                    autoComplete="off"
                />
            </Popover.Header>
            <Popover.Body as="p" className="calendar-item-popover-body">
                Start Time:{" "}
                <input
                    className="new-calendar-item-popover-input"
                    name="time"
                    type="time"
                    value={info.time}
                    disabled
                />{" "}
                <br />
                End Time:{" "}
                <input
                    className="new-calendar-item-popover-input"
                    name="end"
                    type="time"
                    onChange={handleChange}
                    value={info.end}
                    min={info.end}
                />{" "}
                <br />
                Location:{" "}
                <input
                    className="new-calendar-item-popover-input"
                    name="place"
                    type="text"
                    onChange={handleChange}
                    value={info.place}
                    placeholder="11 W 53rd St, New York, NY 10019"
                    autoComplete="off"
                />
                {type === "newEvent" ? (
                    <Button size="sm" onClick={handleCreate}>
                        Create!
                    </Button>
                ) : (
                    <Button size="sm" onClick={handleEdit}>
                        Save
                    </Button>
                )}
            </Popover.Body>
        </>
    );
}
