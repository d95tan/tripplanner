import { useOutletContext } from "react-router-dom";

export default function PlacesPage() {
    const [data, setData, project] = useOutletContext();

    return <>
        <h1>Places page</h1>
        <p>Ability to CRUD potential places with/without dates</p>
    </>
}