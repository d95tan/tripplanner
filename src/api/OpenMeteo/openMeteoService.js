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
    
    const fake = [
        { date: new Date(2023, 11, 25), forecast: true, low: 15, high: 20, code: 45 },
        { date: new Date(2023, 11, 26), forecast: true, low: 15, high: 20, code: 45 },
        { date: new Date(2023, 11, 27), forecast: true, low: 15, high: 20, code: 45 },
        { date: new Date(2023, 11, 28), forecast: false, low: 15, high: 20, },
        { date: new Date(2023, 11, 29), forecast: false, low: 15, high: 20 },
        { date: new Date(2023, 11, 30), forecast: false, low: 15, high: 20},
        { date: new Date(2023, 11, 31), forecast: false, low: 15, high: 20 },
    ]
    
    return fake;
}

