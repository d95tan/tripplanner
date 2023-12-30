import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function NavbarOut() {
    return (
        <Navbar sticky="top" bg="light">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img
                        alt="logo"
                        src="/tp-logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    WanderWell
                </Navbar.Brand>
                <Nav className="ml-auto align-items-center">
                    <Nav.Link as={NavLink} to="/signup">
                        <Button variant="primary" size="sm">
                            Sign Up
                        </Button>
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/login">
                        Login
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
