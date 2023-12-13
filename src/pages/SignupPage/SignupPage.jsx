import { useState } from "react"
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"

import NavbarOut from "../../Components/NavbarOut";

export default function SignupPage() {
    
    const [cred, setCred] = useState({
        email: "",
        password: "",
        password2: "",
    })

    const navigate = useNavigate()

    const [valid, setValid] = useState("");
    const [match, setMatch] = useState("");
    
    const handleChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let success = true;

        if (cred.password.length < 8) {
            setValid("Password must be at least 8 characters long")
            success = false;
        }
        if (cred.password !== cred.password2) {
            setMatch("Passwords do not match")
            success = false;
        }

        if (success === true) {
            console.log("Sign up success!")
            return navigate("/login");
        }
    }

    return <>
        <NavbarOut />

        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={cred.email}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={cred.password}
                    onChange={handleChange}
                    required
                />
                { valid && <Alert variant="danger">{valid}</Alert>}
            </Form.Group>
            <Form.Group controlId="formBasicPassword2">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                    name="password2"
                    type="password"
                    placeholder="Password"
                    value={cred.password2}
                    onChange={handleChange}
                    required
                />
                { match && <Alert variant="danger">{match}</Alert>}
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
        </Form>
    </>
}