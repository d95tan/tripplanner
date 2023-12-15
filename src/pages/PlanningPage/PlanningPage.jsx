import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { format } from "date-fns"
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
                        key={proj.name}
                        as={Link}
                        to={"/planning/" + proj.name}
                        style={{ width: "12rem", margin:"1rem" }}
                    >
                        <Card.Body>
                            <Card.Title>{proj.name}</Card.Title>
                            <Card.Text>
                                {format(proj.start, "do MMM yyyy")} <br/> to <br/>  {format(proj.end, "do MMM yyyy")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}
