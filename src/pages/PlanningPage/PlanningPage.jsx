import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "react-bootstrap/Card";

import NavbarIn from "../../Components/NavbarIn";

export default function PlanningPage() {
    const [projectsArr, setProjectsArr] = useState([
        "Sydney",
        "Los Angeles",
        "Europe Tour",
        "Bangkok",
    ]);

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
