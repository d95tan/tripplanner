import { AIRTABLE_KEY } from "../../config";

export async function airtableApi(project, method, data) {
    const url = `https://api.airtable.com/v0/appeoaNvKiJI0aZsx/${project}`;
    const options = {
        method,
        headers: {
            "Authorization": `Bearer ${AIRTABLE_KEY}`
        }
    }

    const response = await fetch(url, options);
    const json = await response.json();

    return json;
}