import NavbarOut from "../../Components/NavbarOut"
import Button from "react-bootstrap/esm/Button"
import { NavLink } from "react-router-dom"

export default function LandingPage() {
    return <>
        <NavbarOut />
        <div className="landing-page-div gradient-background">
            <div className="landing-page-text">
                <h1>Welcome to WanderWell!</h1>
                <h5>Plan Your Perfect Trip with Ease</h5><br />
                <Button variant="primary" as={NavLink} to="/planning">
                    Try for free now!
                </Button>
            </div>
            <img className="landing-page-first-img" src="Isometric Planning Page.png" />
        </div>

        <div className="landing-page-div">
            <img className="landing-page-edit-img" src="Edit Events Easily.gif" />
            <div className="landing-page-text">
                <h2>Create personalised itineraries <br />tailored to your travel needs.</h2>
                <h6>Add and Edit Events and Activities with ease.</h6>
            </div>
        </div>

        <div className="landing-page-div">
            <div className="landing-page-text">
                <h2>Stay Informed with <br />the Latest Information</h2>
                <h6>Access up-to-date weather forecasts so you can plan accordingly. <br /> Currency calculator coming soon!</h6>
            </div>
            <img className="landing-page-edit-img" src="Weather.png" />
        </div>
    </>
}