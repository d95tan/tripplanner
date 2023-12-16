import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { eachDayOfInterval } from "date-fns"
import NavbarIn from "../../../Components/NavbarIn";
import CalendarTimeBar from "./Components/CalendarTimeBar";
import CalendarDay from "./Components/CalendarDay";
import { getData } from "../../../api/getData";

export default function CalendarPage() {
    let { project } = useParams();
    const [data, setData] = useState([]);
    const [dates, setDates] = useState([]);
    const [events, setEvents] = useState([]);

    // const data = airtableService();
    // const dates = data;

    useEffect(() => {
        (async function () {
            const tmp = await getData(project);
            console.log(tmp);
            setData(tmp);
            setDates(eachDayOfInterval({ start: tmp.start, end: tmp.end }));
            setEvents([...tmp.events])

        })();
    }, [project]);


    
    
     //stopped here - need to create an array of dates starting from start and ending at end

    return (
        <>
            <NavbarIn />
            <div className="calendar-container">
                <h2>Test</h2>
                {/* <CalendarTimeBar />
                {data.events.map(d => <CalendarDay
                    key={d.name+d.date.toString()}
                    day={d.day}
                    date={d.date}
                    events={d.events}
                />)} */}
            </div>
        </>
    );
}
