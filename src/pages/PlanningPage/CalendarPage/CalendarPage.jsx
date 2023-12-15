import { useParams } from "react-router-dom";
import { useEffect } from "react";

import NavbarIn from "../../../Components/NavbarIn";
import CalendarItem from "./Components/CalendarItem";

export default function CalendarPage() {
    let { project } = useParams();
    // console.log(project)

    const url4 = "http://api.aviationstack.com/v1/flights?access_key=792d16340973bf877385cb86feb9b75b"
    useEffect(() => {
        (async function () {
            const response = await fetch(url4, {
                redirect: "manual",
                referrerPolicy: "unsafe-url"
            });
            const json = await response.json();
            // setState(json);
            console.log("aviationstack", json);
        })();
    }, []);


    return (
        <>
            <NavbarIn />
            <CalendarItem />
        </>
    );
}
