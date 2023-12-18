import { add } from "date-fns";
import { weatherCodes } from "./openMeteoCode";

export async function sortWeatherData(forecast, historical) {
    const weather = [];
    if (forecast) {
        let daily = forecast.daily;
        for (let i = 0; i < daily.time.length; i++) {
            const today = {
                date: new Date(daily.time[i]),
                high: daily.temperature_2m_max[i],
                low: daily.temperature_2m_min[i],
                code: daily.weather_code[i],
                weatherString: weatherCodes[daily.weather_code[i]]
            };
            weather.push(today);
        }
    }
    if (historical) {
        let daily = historical.daily;
        for (let i = 0; i < daily.time.length; i++) {
            const today = {
                date: add(new Date(daily.time[i]), { years: 1 }),
                high: daily.temperature_2m_max[i],
                low: daily.temperature_2m_min[i],
            }
            weather.push(today);
        }
    }
    return weather;
}