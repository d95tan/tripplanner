import { airtableApi } from "./airtableApi"

export async function airtableService(project, method, data) {
    if (method === "GET") {
        const airtable = await airtableApi(project, method)
        return airtable;
    }
}
