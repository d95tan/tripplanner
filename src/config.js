// config.js

// Height of each calendar item in REM
export const SLOT_HEIGHT = 1.5

// Airtable API Key
export const AIRTABLE_KEY = "patytdRdWs3N7GSM1.809a19af2d78d31544c220073019e549d2afa251d91098ed0f74ddda2e3294fc"

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
]