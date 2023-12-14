// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import { Route, Routes } from "react-router-dom";

import LandingPage from "/src/pages/LandingPage/LandingPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CalendarPage from "./pages/PlanningPage/CalendarPage/CalendarPage"
import PlanningPage from "./pages/PlanningPage/PlanningPage";


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="planning/" element={<PlanningPage />} />
                <Route path="planning/:project/" element={<CalendarPage />} />
            </Routes>
        </>
    );
}

export default App;
