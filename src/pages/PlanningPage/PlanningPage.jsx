import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import NavbarIn from "../../Components/NavbarIn";
import { getProjects } from "../../api/getProjects";

export default function PlanningPage() {
    const [projectsArr, setProjectsArr] = useState([]);

    useEffect(() => {
        (async function () {
            const data = await getProjects();
            setProjectsArr(data);
        })()
    }, []);

    return (
        <>
            <NavbarIn projectsArr={projectsArr.map(p => p.name)} />
            <Outlet context={[projectsArr, setProjectsArr]} />
        </>
    );
}
