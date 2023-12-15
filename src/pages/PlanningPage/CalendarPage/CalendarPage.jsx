import { useEffect } from "react";
import { useParams } from "react-router-dom"

import NavbarIn from "../../../Components/NavbarIn";
import CalendarTimeBar from "./Components/CalendarTimeBar";
import { getData } from "../../../api/getData";

export default function CalendarPage() {
    let { project } = useParams();
    
    // const data = airtableService();
    // const dates = data;

    useEffect(() => {
        (async function () {
            const data = await getData(project);
            console.log(data)
        })();
    }, [project]);

    dates = //stopped here - need to create an array of dates starting from start and ending at end

    return (
        <>
            <NavbarIn />
            <div className="calendar-container">
                <CalendarTimeBar />
                {data.events.map(d => <CalendarDay
                    key={d.name+d.date.toString()}
                    day={d.day}
                    date={d.date}
                    events={d.events}
                />)}
            </div>
        </>
    );
}
