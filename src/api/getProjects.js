import { AIRTABLE_KEY } from "../config";

export async function getProjects() {
    const url = "https://api.airtable.com/v0/meta/bases/appeoaNvKiJI0aZsx/tables";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${AIRTABLE_KEY}`,
        },
    }
    const response = await fetch(url, options);
    const json = await response.json();
    const projects = json.tables.map(table => {
        return {
            name: table.name,
            start: new Date(JSON.parse(table.description)[0].join(",")),
            end: new Date(JSON.parse(table.description)[1].join(","))
        }
    })
    console.log(projects)
    return projects;
}