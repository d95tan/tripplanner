import { useState, useEffect } from "react";

import { useParams, NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";


export default function NavbarIn({ projectsArr }) {

    const [pa, setPa] = useState(projectsArr)

    useEffect(() => {
        (async function () {
            setPa(projectsArr || ["Loading"]);
        })()
    }, [projectsArr]);
    const { project } = useParams();
    const projectRoute = "/planning/" + project + "/"
    const active = !!project;

    return (
        <Navbar>
            <Container>
                <Nav className="mr-auto">
                <Navbar.Brand as={NavLink} to="/planning">
                    <img
                        alt="logo"
                        src="/tp-logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    WanderWell
                </Navbar.Brand>
                <NavDropdown title={project || "Select trip"} id="basic-nav-dropdown" style={{background: "#DDDDDD", borderRadius: 15}}>
                    {pa.map((proj) =>
                        <NavDropdown.Item
                            key={proj}
                            as={NavLink}
                            to={"/planning/" + proj}
                        >
                            {proj}
                        </NavDropdown.Item>)}
                </NavDropdown>

                {active && ( <>
                    <Nav.Link as={NavLink} to={projectRoute}>Calendar Page</Nav.Link>
                    <Nav.Link as={NavLink} to={projectRoute + "places/"}>Places</Nav.Link>
                    <Nav.Link as={NavLink} to={projectRoute + "info/"}>Info</Nav.Link>
                    <Nav.Link as={NavLink} to={projectRoute + "finances/"}>Finances</Nav.Link>
                    </>)}
                    
                </Nav>

                <Nav className="ml-auto align-items-center">
                    <Nav.Link as={NavLink} to="/profile">
                        Admin
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
