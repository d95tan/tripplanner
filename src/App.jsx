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
import CreateProjectPage from "./pages/PlanningPage/CreateProjectPage/CreateProjectPage"
import ProjectsPage from "./pages/PlanningPage/ProjectsPage/ProjectsPage";
import SingleProjectPage from "./pages/PlanningPage/SingleProjectPage"


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="planning/" element={<PlanningPage />}>
                    <Route path="" element={<ProjectsPage />} />
                </ Route>

                <Route path="planning/" element={<PlanningPage />}>
                    <Route path="create/" element={<CreateProjectPage />} />
                </ Route>

                <Route path="planning/" element={<PlanningPage />}>
                    <Route path=":project/" element={<SingleProjectPage />}>
                        <Route path="" element={<CalendarPage />} />
                    </Route>
                </ Route>
                
                <Route path="planning/" element={<PlanningPage />}>
                    <Route path=":project/" element={<SingleProjectPage />} >
                        <Route path="places/" element={<PlacesPage />} />
                    </ Route>
                </ Route>
                
                <Route path="planning/" element={<PlanningPage />}>
                    <Route path=":project/" element={<SingleProjectPage />} >
                        <Route path="finances/" element={<FinancesPage />} />
                    </ Route>
                </ Route>
                
                <Route path="planning/" element={<PlanningPage />}>
                    <Route path=":project/" element={<SingleProjectPage />} >
                        <Route path="info/" element={<InfoPage />} />
                    </ Route>
                </ Route>

            </Routes>
        </>
    );
}

export default App;
