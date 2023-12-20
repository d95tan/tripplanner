import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import { timeToInputTime, inputTimeToTime, getDuration } from "../../../../config";
import { useState } from "react";

export default function NewCalendarItemPopover({ time, date, showPopover, setShowPopover, addNewEvent }) {

    const [info, setInfo] = useState({
        name: "",
        date: date,
        place: "",
        time: timeToInputTime(time),
        end: timeToInputTime(time+100),
    });

    const handleChange = (e) => {
        setInfo({...info, [e.target.name]:e.target.value})
    };
    
    const handleClick = (e) => {
        e.preventDefault();
        // TODO: Check if end time is after start (duration > 1, i.e. >= 1h)
        // TODO: Round end time to nearest half hour.
        console.log(info);
        const eventInfo = {
            name: info.name,
            date: info.date,
            place: info.place,
            time: inputTimeToTime(info.time),
            duration: getDuration(info.time, info.end)
        }
        console.log(eventInfo)
        addNewEvent(eventInfo);
        setShowPopover(!showPopover)

    }

    return (
        <>
            <Popover.Header as="h3">
                Title: <input
                    name="name"
                    type="text"
                    value={info.name}
                    placeholder="Visit the Museum"
                    onChange={handleChange}
                />
            </Popover.Header>
            <Popover.Body as="p" className="calendar-item-popover-body">
                <label>Start Time: </label>
                <input
                    className="new-calendar-item-popover-input"
                    name="time"
                    type="time"
                    value={info.time}
                    disabled
                /> <br />
                End Time: <input
                    className="new-calendar-item-popover-input"
                    name="end"
                    type="time"
                    onChange={handleChange}
                    value={info.end}
                    min={info.end}
                /> <br />
                Location: <input
                    className="new-calendar-item-popover-input"
                    name="place"
                    type="text"
                    onChange={handleChange}
                    value={info.place}
                    placeholder="11 W 53rd St, New York, NY 10019"
                    autoComplete="off"
                />
                <Button size="sm" onClick={handleClick}>Create!</Button>
            </Popover.Body>
        </>
    );
}
