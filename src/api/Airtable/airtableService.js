export function airtableService(project) {

    const events = [
        { name: "midnight", address: "hotel", date: new Date(2023, 11, 25,0,0), duration: 2 },
        { name: "Lunch at Woolies", address: "152 Jane St",date: new Date(2023, 11, 25,12,0), duration: 2 },
        { name: "Dinner at Macs", address: "123 Jane St",date: new Date(2023, 11, 25, 19,0), duration: 3 }
    ]

    const accoms = [
        { name: "Hotel California", address: "Not california", in: new Date(2023, 11, 25, 15, 0), out: new Date(2023, 11, 28, 11, 30) },
        { name: "Mercure", address: "Venus", in: new Date(2023, 11, 28, 15, 0), out: new Date(2023, 11, 31, 11, 30) },
    ]

    const flights = [
        { name: "TR2", from: "SIN", to: "SYD", in: new Date(2023, 11, 25, 1, 0), out: new Date(2023, 11, 25, 9, 0) },
        { name: "TR3", from: "SYD", to: "SIN", in: new Date(2023, 11, 31, 15, 0), out: new Date(2023, 11, 25, 23, 30) }
    ]
    
    const data = {
        start: new Date(2023, 11, 25),
        end: new Date(2023, 11, 31),
        events,
        info: {
            coordinates: { lat: -33.75, long: 151.125 },
            accoms,
            flights,
        }
    }


    return data;
}