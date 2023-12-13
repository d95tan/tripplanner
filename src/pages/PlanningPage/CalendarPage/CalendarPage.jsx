import { useParams } from "react-router-dom";

import NavbarIn from "../../../Components/NavbarIn"; 
import CalendarItem from "./Components/CalendarItem";


export default function CalendarPage() {
    let { project } = useParams()
    // console.log(project)

    return <>
        <NavbarIn />
        <CalendarItem />
    </>
}