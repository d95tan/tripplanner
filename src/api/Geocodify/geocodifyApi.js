export async function geocodifyApi(query) {
    const url = "https://api.geocodify.com/v2/geocode?";
    const apiKey = "api_key=U59JvToXKMIdLhIMmlgvPsIKoYqirWsr";
    const q = "&q=" + query;

    const response = await fetch(url + apiKey + q);
    const json = await response.json();
    return json;
}
