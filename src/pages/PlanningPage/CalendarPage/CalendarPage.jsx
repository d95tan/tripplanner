import { getProjects } from "../../../api/getProjects";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

import NavbarIn from "../../../Components/NavbarIn";
import CalendarItem from "./Components/CalendarItem";

export default function CalendarPage() {
    let { project } = useParams();
    
    // const data = airtableService();
    // const dates = data;

    // useEffect(() => {
    //     (async function () {
    //         const coord = await geocodifyLatLong(project);
    //         console.log(coord)
    //     })();
    // }, [project]);

    

    return (
        <>
            <NavbarIn />
            {/* <div className="calendar-container">
                <CalendarTimeBar />
                {dates.map(d => <CalendarDay
                    key={d.date}
                    day={d.day}
                    date={d.date}
                    events={d.events}
                />)}
            </div> */}
        </>
    );
}
