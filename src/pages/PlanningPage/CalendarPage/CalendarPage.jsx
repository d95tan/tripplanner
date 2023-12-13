import { NavLink, useParams } from "react-router-dom";
import CalendarItem from "./Components/CalendarItem";


export default function CalendarPage() {
    let { project } = useParams()
    console.log(project)

    return <>
        <nav>
            <NavLink to="/">Logo + TripPlanner</NavLink>
            <select>
                <option>Sydney</option>
                <option>North Korea</option>
                <option>Europe Tour</option>
            </select>
            <NavLink to="/planning/calendar">Calendar</NavLink>
            <NavLink to="/planning/finances">Finances</NavLink>
            <NavLink to="/planning/places">Places</NavLink>
            <NavLink to="/planning/info">Info</NavLink>
            <NavLink to="/">Logout</NavLink>
        </nav>
        <CalendarItem />
    </>
}