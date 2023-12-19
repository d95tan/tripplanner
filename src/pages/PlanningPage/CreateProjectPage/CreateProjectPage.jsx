import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { format } from "date-fns";
import { useState } from "react";
import { createTrip } from "../../../api/createTrip";
import { useNavigate, useOutletContext } from "react-router-dom";

function removeLeadingZeroes(dateString) {
    return dateString.split("-").map(s => s[0] === "0"? s[1]: s).join("-")
}

export default function CreateProjectPage() {
    
    const [info, setInfo] = useState({ place: "", start: "", end: "" })
    const [projectsArr, setProjectsArr] = useOutletContext();
    const navigate = useNavigate();

    const today = format(Date.now(), "yyyy-MM-dd");
    
    const handleChange = (e) => { 
        setInfo({...info, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formatInfo = { ...info }
        formatInfo.start = removeLeadingZeroes(info.start);
        formatInfo.end = removeLeadingZeroes(info.end)

        const trip = await createTrip(formatInfo);
        setProjectsArr([...projectsArr,
            {
                name: trip.name,
                start: new Date(JSON.parse(trip.description)[0].join("-")),
                end: new Date(JSON.parse(trip.description)[1].join("-"))
            }])
        navigate(`/planning/${trip.name}`);
    }

    return <>
        <h1>Create project Page</h1>

        <Form className="create-project-container" onSubmit={handleSubmit}>
            <Form.Group controlId="formPlace">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                    name="place"
                    type="text"
                    placeholder="New York"
                    value={info.place}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formStartDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                    name="start"
                    type="date"
                    value={info.start}
                    onChange={handleChange}
                    min={today}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formEndDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                    name="end"
                    type="date"
                    value={info.end}
                    onChange={handleChange}
                    min={info.start}
                    required
                />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
                Create
            </Button>
        </Form>
    </>
}