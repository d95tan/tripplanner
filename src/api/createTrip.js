import { AIRTABLE_FIELDS_TEMPLATE } from "../config";
import { airtableApi, airtableMetaApi } from "./Airtable/airtableApi";
import { formatRecordBody } from "./Airtable/airtableService";

export async function createTrip(data) {
    const dates = `[[${data.start.split("-")}],[${data.end.split("-")}]]`;

    const body = {
        name: data.place,
        description: dates,
        fields: AIRTABLE_FIELDS_TEMPLATE,
    };

    const bodyString = JSON.stringify(body);
    const createTableResponse = await airtableMetaApi("POST", bodyString);

    const recordBody = formatRecordBody({ name: "dates", type: "dates", date: dates })
    airtableApi(data.place.replaceAll(" ","%20"), "POST", recordBody);

    return createTableResponse;
}
