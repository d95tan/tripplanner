import Card from "react-bootstrap/Card";
import { format } from "date-fns"
import { Link, useOutletContext } from "react-router-dom";

export default function ProjectsPage() {
    const [projectsArr, setProjectsArr] = useOutletContext();
    return <div style={{display: "flex", flexDirection: "row"}}>
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
                <Card
                    as={Link}
                    to={"/planning/create"}
                    bg="light"
                    style={{width: "12rem", margin: "1rem"}}
                >
                    <Card.Body
                    style={{ display:"flex", flexDirection:"column", justifyContent: "center"}}>
                        <Card.Title style={{textAlign: "center"}}>
                            Add your next adventure
                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>
}