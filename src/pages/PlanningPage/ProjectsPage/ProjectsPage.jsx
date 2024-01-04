import Card from "react-bootstrap/Card";
import { format } from "date-fns"
import { Link, useOutletContext } from "react-router-dom";

export default function ProjectsPage() {
    const [projectsArr, setProjectsArr] = useOutletContext();
    return <div style={{marginLeft: "1.5rem"}}>
                {projectsArr.map((proj) => (
                    <Card
                        key={proj.name}
                        as={Link}
                        to={"/planning/" + proj.name}
                        style={{ width: "12rem", height: "9rem", margin:"1rem", display: "inline-block", }}
                    >
                        <Card.Body style={{ display:"flex", flexDirection:"column", justifyContent: "center",}}>
                            <Card.Title style={{textAlign: "center"}}>{proj.name}</Card.Title>
                            <Card.Text style={{textAlign: "center"}}>
                                {format(proj.start, "do MMM yyyy")} <br/> to <br/>  {format(proj.end, "do MMM yyyy")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
                <Card
                    as={Link}
                    to={"/planning/create"}
                    bg="light"
                    style={{width: "12rem", height: "9rem", margin: "1rem", display: "inline-block"}}
                >
                    <Card.Body style={{ display:"flex", flexDirection:"column", justifyContent: "center"}}>
                        <Card.Title style={{textAlign: "center"}}>
                            <br />Add your next adventure
                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>
}