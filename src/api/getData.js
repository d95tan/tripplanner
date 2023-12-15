export function getData(project) {
    (async function () {
            const coord = await geocodifyLatLong(project);
            console.log(coord)
        })();
}