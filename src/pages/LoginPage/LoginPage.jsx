import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import NavbarOut from "../../Components/NavbarOut";

export default function Loginpage() {
    const [cred, setCred] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cred.email === "admin@admin" && cred.password === "password") {
            return navigate("/planning/");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <>
            <NavbarOut />

            <Form onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}
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
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
            </Form>

            {/* <div>
            <label>Email: </label>
            <input name="email" value={cred.email} onChange={handleChange} placeholder="xiaoming1999@example.com" />
            <br />
            
            <label>Password: </label>
            <input name="password" type="password" value={cred.password} onChange={handleChange} />
            <br />
            <br />
            
            <button onClick={handleClick}>Log in!</button>
        </div> */}
        </>
    );
}
