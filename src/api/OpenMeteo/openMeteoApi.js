export async function openMeteoForecastApi({lat, long}, start, end) {
    const url = "https://api.open-meteo.com/v1/forecast?" + 
        `latitude = ${lat} & longitude=${long}` +
        "& daily=weather_code, temperature_2m_max, temperature_2m_min &" +
        `start_date=${start}&end_date=${end}`   //date in yyyy-mm-dd
    
    const response = await fetch(url);
    const json = response.json();
    return json;
}

export async function openMeteoHistoricalApi({lat, long}, start, end) {
    const url = "https://archive-api.open-meteo.com/v1/archive?" +
    `latitude = ${lat} & longitude=${long} & ` +
    `start_date=${start} & end_date=${end}` +
    "& temperature_2m_max, temperature_2m_min &"
    
    const response = await fetch(url);
    const json = response.json();
    return json;
}