import { useOutletContext } from "react-router-dom"
import CalendarTimeBar from "./Components/CalendarTimeBar";
import CalendarDay from "./Components/CalendarDay";

export default function CalendarPage() {
    const [data, setData, project] = useOutletContext();
    
    return (
        <>
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
