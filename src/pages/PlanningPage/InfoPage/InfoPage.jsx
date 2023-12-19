import { useOutletContext } from "react-router-dom"

export default function InfoPage() {
    const [data, setData, project] = useOutletContext();
    
    return <>
        <h1>Info page</h1>
        <p>See all important trip details - flights, accoms</p>
        <p>Ability to CRUD trip details</p>
    </>
}