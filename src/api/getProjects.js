import { airtableDateRangeToDate } from "../config";
import { airtableMetaApi } from "./Airtable/airtableApi";

export async function getProjects() {

    const projectsJson = await airtableMetaApi("GET")
    const projects = projectsJson.tables.map(table => {
        const [start, end] = airtableDateRangeToDate(table.description)
        return {
            name: table.name,
            start,
            end,
        }
    })
    // console.log(projects)
    return projects;
}