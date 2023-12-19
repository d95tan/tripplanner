import { airtableMetaApi } from "./Airtable/airtableApi";

export async function getProjects() {

    const projectsJson = await airtableMetaApi("GET")
    console.log(projectsJson)
    const projects = projectsJson.tables.map(table => {
        return {
            name: table.name,
            start: new Date(JSON.parse(table.description)[0].join("-")),
            end: new Date(JSON.parse(table.description)[1].join("-"))
        }
    })
    console.log(projects)
    return projects;
}