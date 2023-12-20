import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover"
import Tooltip from "react-bootstrap/Tooltip"

import { calculatePosition } from "../../../../config";
import CalendarItem from "./CalendarItem";

export default function NewCalendarItem({ data }) {
    const { top, height } = calculatePosition(data.time, data.duration);

    const popover = (e) => {
        console.log(e)
        return (
            // <Popover id="popover-basic">
            //     <Popover.Header as="h3">Popover right</Popover.Header>
            //     <Popover.Body>
            //         And here's some <strong>amazing</strong> content. It's very engaging.
            //         right?
            //     </Popover.Body>
            // </Popover>
            <Tooltip id="tooltip-basic">
                Simple tooltip
            </Tooltip>
        )
    }

    return (
        <>
            <OverlayTrigger
                placement="auto"
                show={true}
                defaultShow={true}
                overlay={popover}
            >
                <CalendarItem
                    key={data.time}
                    data={data}
                    type="newEvent"
                    style={{
                        position: "absolute",
                        top: `${top}rem`,
                        height: `${height}rem`,
                        boxShadow: "-1px -1px 5px lightblue inset",
                    }}
                />
            </OverlayTrigger>
        </>
    );
}
