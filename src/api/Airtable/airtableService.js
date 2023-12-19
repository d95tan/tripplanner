export function formatRecordBody({ name, type, date, place, time, duration }) {
    
    const typeArr = [type];

    const body = {
        fields: {
            name,
            type: typeArr,
            date,
            place,
            time,
            duration
        }
    }

    const json = JSON.stringify(body);
    return json;
}


//{"fields":{"name":"dates","type":["dates"],"date":"[[2024,1,1],[2024,1,16]]"}}