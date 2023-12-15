import { geocodifyApi } from "./geocodifyApi";

export async function geocodifyLatLong(query) {
    // const lat = -33.75;
    // const long = 151.125;
    const data = await geocodifyApi(query);
    const [long, lat] = await data.response.features[0].geometry.coordinates;
    console.log(lat,long);
    return [ lat, long ];
}