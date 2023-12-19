import { add, addDays, differenceInCalendarDays, isAfter, sub, subYears } from "date-fns";
import { openMeteoForecastApi, openMeteoHistoricalApi } from "./openMeteoApi";
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

    //holiday is more than 14 days away
    if (differenceInCalendarDays(start, today) > 14) {
        historical = await openMeteoHistoricalApi(coords, subYears(start, 1), subYears(end, 1));
    }
    else {
        //holiday ends in less than 14 days
        if (differenceInCalendarDays(end, today) <= 14) {
            forecast = await openMeteoForecastApi(coords, start, end);
        }
        //holiday starts in less than 14 days, ends more than 14 days away
        else {
            forecast = await openMeteoForecastApi(coords, start, addDays(today, 14))
            historical = await openMeteoHistoricalApi(coords, subYears(addDays(today, 15), 1), subYears(end, 1))
        }
    }

    const weatherData = await sortWeatherData(forecast, historical);

    return weatherData;   
}

