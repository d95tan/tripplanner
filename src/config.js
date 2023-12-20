// config.js

// Height of each calendar item in REM
export const SLOT_HEIGHT = 1.5;

// Height of 1 REM in px
export const PXinREM = parseInt(
    window.getComputedStyle(document.body).getPropertyValue("font-size")
);

// Airtable API Key
export const AIRTABLE_KEY = "patytdRdWs3N7GSM1.809a19af2d78d31544c220073019e549d2afa251d91098ed0f74ddda2e3294fc";

// Airtable new project table format
export const AIRTABLE_FIELDS_TEMPLATE = [
    {
        name: "name",
        type: "singleLineText",
    },
    {
        name: "type",
        type: "multipleSelects",
        options: {
            choices: [
                { name: "dates" },
                { name: "event" },
                { name: "place" },
                { name: "info-flight" },
                { name: "info-accoms" },
            ],
        },
    },
    {
        name: "date",
        type: "multilineText",
    },
    {
        name: "place",
        type: "multilineText",
    },
    {
        name: "time",
        type: "number",
        options: { precision: 0 },
    },
    {
        name: "duration",
        type: "number",
        options: { precision: 0 },
    },
];

// Calculates position and height of each Calendar Item
export const calculatePosition = (start, duration) => {
    const top = (SLOT_HEIGHT * parseInt(start)) / 100;
    const height = (SLOT_HEIGHT * duration) / 2;
    return { top, height };
};

const padTime = (time) => {
    return time.toString().padStart(4, "0");
};

export const getEndTime = (time, intervals) => {
    const timeInt = timeToInt(time);
    const duration = intervals * 50;
    const endTimeInt = timeInt + duration;
    return intToTime(endTimeInt);
};

export const formatAirtableTime = (time, format) => {
    const padded = padTime(time);
    const HH = parseInt(padded.slice(0, 2));
    const MM = padded.slice(2);
    if (format === "AMPM") {
        let AMPM, HH12;
        if (HH < 12) {
            AMPM = "AM";
            HH12 = HH;
        } else {
            AMPM = "PM";
            HH12 = HH - 12;
        }
        const formattedTime = `${HH12}:${MM} ${AMPM}`;
        return formattedTime;
    } else {
        const formattedTime = `${HH}:${MM} hrs`;
        return formattedTime;
    }
};

export const intToTime = (int) => {
    let time = int;
    if (int % 100 === 50) {
        time -= 20;
    }
    return time;
};

const timeToInt = (time) => {
    let int = time;
    if (time % 100 != 0) {
        int += 20;
    }
    return int;
};
