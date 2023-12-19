import { useOutletContext } from "react-router-dom"

export default function FinancesPage() {
    const [data, setData, project] = useOutletContext();
    
    return <>
        <h1>Finances page</h1>
        <p>Ability to see current exchange rates compared to destination country</p>
        <p>Future: ability to split expenses with friends</p>
    </>
}