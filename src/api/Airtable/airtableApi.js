import { AIRTABLE_KEY } from "../../config";

export async function airtableApi(project, method, data) {
    const projectNoSpace = project.replaceAll(" ", "%20")
    const url = `https://api.airtable.com/v0/appeoaNvKiJI0aZsx/${projectNoSpace}`;
    const options = {
        method,
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `Bearer ${AIRTABLE_KEY}`
        },
        body: data ? data : null,
    }

    const response = await fetch(url, options);
    const json = await response.json();

    return json;
}

export async function airtableMetaApi(method, data) {
    const url = "https://api.airtable.com/v0/meta/bases/appeoaNvKiJI0aZsx/tables";
    const options = {
        method,
        headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${AIRTABLE_KEY}`,
        },
        body: data? data : null,
    }
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
}