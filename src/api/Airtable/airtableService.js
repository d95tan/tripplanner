import { airtableApi } from "./airtableApi"

export async function airtableService(project, method, data) {
    if (method === "GET") {
        return airtableApi(project,method)
    }
}
