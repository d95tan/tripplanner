import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom"
import { getDataByDay } from "../../api/getDataByDay";

export default function CalendarPage() {
    let { project } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        (async function () {
            const dataByDay = await getDataByDay(project);
            setData(dataByDay);
        })();
    }, [project]);

    return (
        <>
            <Outlet context={[data, setData, project]} />
        </>
    );
}
