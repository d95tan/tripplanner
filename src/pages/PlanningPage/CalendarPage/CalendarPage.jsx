import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NavbarIn from "../../../Components/NavbarIn";
import CalendarTimeBar from "./Components/CalendarTimeBar";
import CalendarDay from "./Components/CalendarDay";
import { getDataByDay } from "../../../api/getDataByDay";

export default function CalendarPage() {
    let { project } = useParams();
    const [data, setData] = useState([]);

    // const data = airtableService();
    // const dates = data;

    useEffect(() => {
        (async function () {
            const dataByDay = await getDataByDay(project);
            setData(dataByDay);
        })();
    }, [project]);

    return (
        <>
            <NavbarIn />
            <div className="calendar-container">
                <h2>{project}</h2>
                <CalendarTimeBar />
                {data.map(d => <CalendarDay
                    key={d.date}
                    date={d.date}
                    events={d.events}
                    accoms={d.accoms}
                    flights={d.flights}
                    weather={d.weather}
                />)}
            </div>
        </>
    );
}
