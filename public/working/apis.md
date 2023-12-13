# AeroAPI
const apiKey = '6BSiDjyUR3NTWCFVZyXgdkzQroBrCeyg';
const url = 'https://aeroapi.flightaware.com/aeroapi/flights/TR2';

fetch(url, {
  method: 'GET',
  headers: {
    'Accept': 'application/json; charset=UTF-8',
    'x-apikey': apiKey
  }
})

# Open Meteo
https://archive-api.open-meteo.com/v1/archive?latitude=35.6895&longitude=139.6917&start_date=2022-12-22&end_date=2022-12-31&hourly=temperature_2m&timezone=Asia%2FTokyo

# Exchange Rate
https://www.exchangerate-api.com/docs/supported-currencies
https://api.exchangerate-api.com/v4/latest/sgd
https://open.er-api.com/v6/latest/USD



    // const [state, setState] = useState("");

    // const url =
    //     "http://api.aviationstack.com/v1/flights?access_key=792d16340973bf877385cb86feb9b75b&flight_iata=tr3";

    // useEffect(() => {
    //     async function apiCall() {
    //         const response = await fetch(url);
    //         const json = await response.json();
    //         setState(json);
    //         console.log(json);
    //     }
    //     apiCall();
    // }, []);
