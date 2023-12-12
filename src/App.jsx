import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "/src/pages/LandingPage/LandingPage";
import { useEffect, useState } from "react";

function App() {

  const [state, setState] = useState("");

  const url = "http://api.aviationstack.com/v1/flights?access_key=792d16340973bf877385cb86feb9b75b&flight_iata=tr3"

    useEffect(() => {
      async function apiCall() {
        const response = await fetch(url);
        const json = await response.json();
        setState(json);
        console.log(json);
      }
      apiCall();
    },[]);

    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </>
    );
}

export default App;
