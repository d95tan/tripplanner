import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

import NavbarIn from "../../Components/NavbarIn";
import { getProjects } from "../../api/getProjects";

export default function PlanningPage() {
    const [projectsArr, setProjectsArr] = useState([
    ]);

    useEffect(() => {
        (async function () {
            const data = await getProjects();
            setProjectsArr(data);
        })()
    }, []);

    return (
        <>
            <NavbarIn projects={projectsArr} />
            <div style={{display: "flex", flexDirection: "row"}}>
                {projectsArr.map((proj) => (
                    <Card
                        key={proj}
                        as={Link}
                        to={"/planning/" + proj}
                        style={{ width: "12rem", margin:"1rem" }}
                    >
                        <Card.Body>
                            <Card.Title>{proj}</Card.Title>
                            <Card.Text>
                                proj.dateStart to proj.dateEnd
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}
