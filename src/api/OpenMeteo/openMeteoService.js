import { openMeteoForecastApi, openMeteoHistoricalApi } from "./OpenMeteoApi";

export function openMeteoService({lat, long}, start, end) {
    // if (start-now > 14 days),
        // call historical data
        // return temps = {historical: [lo,hi],[lo,hi],[lo,hi]}

    // else:
        // if (end <= 14 days),
            // call forecast(start,end)
            // return temps = {forecast: [lo,hi],[lo,hi],[lo,hi]}
        // else:
            // call forecast(start, now+14 days)
            // call historical(now+15days, end)
            // return temps = {forecast: [lo,hi],[lo,hi],[lo,hi], historical: [lo,hi],[lo,hi],[lo,hi]}
}

