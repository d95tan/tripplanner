import Popover from "react-bootstrap/Popover";
import { formatAirtableTime, getEndTime } from "../../../../config";

export default function CalendarItemPopover({ data, type }) {
    return <>
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
                    {data.time ? `Time: ${formatAirtableTime(data.time, "AMPM")} to ${formatAirtableTime(getEndTime(data.time, data.duration),"AMPM")}`:
                    data.timeIn ? `Check-in time: ${formatAirtableTime(data.timeIn, "AMPM")}` :
                    `Check-out time: ${formatAirtableTime(data.timeOut, "AMPM")}`}
                <br />
                {data.place? `Address: ${data.place}`: ""}
                {type === "flights" ? (
                        <>
                            Departure: {data.dep} <br />
                            Arrival: {data.arr}
                        </>
                ) : (
                    null
                )}
            </Popover.Body>
    </>
}