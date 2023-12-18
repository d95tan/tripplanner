import { add, differenceInCalendarDays, isAfter, sub } from "date-fns";
import { openMeteoForecastApi, openMeteoHistoricalApi } from "./OpenMeteoApi";
import { sortWeatherData } from "./sortWeatherData";

export async function openMeteoService(coords, start, end) {
    const today = new Date(Date.now())

    let historical, forecast;

    // Holiday is passed
    if (isAfter(today, end)) {
        return null;
    }
    
    // Holiday has started
    if (isAfter(today, end)) {
        start = today;
    }


    if (differenceInCalendarDays(start, today) > 14) {
        historical = await openMeteoHistoricalApi(coords, sub(start, { years: 1 }), sub(end, {years:1}));
    }
    else {
        if (differenceInCalendarDays(end, today) <= 14) {
            forecast = await openMeteoForecastApi(coords, start, end);
        }
        else {
            forecast = await openMeteoForecastApi(coords, start, add(start, {day: 14}))
            historical = await openMeteoHistoricalApi(coords, add(start, {days:15}), sub(end, {years:1}))
        }
    }

    const weatherData = await sortWeatherData(forecast, historical);

    return weatherData;   
}

