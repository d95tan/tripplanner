// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import { Route, Routes } from "react-router-dom";

import LandingPage from "/src/pages/LandingPage/LandingPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CalendarPage from "./pages/PlanningPage/CalendarPage/CalendarPage"
import PlanningPage from "./pages/PlanningPage/PlanningPage";
import PlacesPage from "./pages/PlanningPage/PlacesPage/PlacesPage";
import FinancesPage from "./pages/PlanningPage/FinancesPage/FinancesPage";
import InfoPage from "./pages/PlanningPage/InfoPage/InfoPage";


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="planning/" element={<PlanningPage />} />
                <Route path="planning/:project/" element={<CalendarPage />} />
                <Route path="planning/:project/places" element={<PlacesPage />} />
                <Route path="planning/:project/finances" element={<FinancesPage />} />
                <Route path="planning/:project/info" element={<InfoPage />} />
            </Routes>
        </>
    );
}

export default App;
