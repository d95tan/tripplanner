import { useParams } from "react-router-dom";
import { useEffect } from "react";

import NavbarIn from "../../../Components/NavbarIn";
import CalendarItem from "./Components/CalendarItem";

export default function CalendarPage() {
    let { project } = useParams();
    // console.log(project)

    const url =
        "https://archive-api.open-meteo.com/v1/archive?latitude=35.6895&longitude=139.6917&start_date=2022-12-22&end_date=2022-12-31&hourly=temperature_2m&timezone=Asia%2FTokyo";

    useEffect(() => {
        (async function () {
            const response = await fetch(url);
            const json = await response.json();
            // setState(json);
            console.log("open meteo", json);
        })();
    }, []);

    const url2 = "https://api.exchangerate-api.com/v4/latest/sgd";
    useEffect(() => {
        (async function () {
            const response = await fetch(url2);
            const json = await response.json();
            // setState(json);
            console.log("exchangerate", json);
        })();
    }, []);

    const apiKey = "6BSiDjyUR3NTWCFVZyXgdkzQroBrCeyg";
    const url3 = "https://aeroapi.flightaware.com/aeroapi/flights/TR2";
    useEffect(() => {
        (async function () {
            const response = await fetch(url3, {
                method: "GET",
                headers: {
                    Accept: "application/json; charset=UTF-8",
                    "x-apikey": apiKey,
                },
            });
            const json = await response.json();
            // setState(json);
            console.log("aeroapi", json);
        })();
    }, []);

    return (
        <>
            <NavbarIn />
            <CalendarItem />
        </>
    );
}
