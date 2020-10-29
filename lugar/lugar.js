const axios = require('axios');

const getLugarLatLon = async(dir) => {

    encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json?access_token=pk.eyJ1IjoicnZpbGVsbGEiLCJhIjoiY2tndTF6aGR0MTRzMTJ5cDI0czljNmYwayJ9.j01a5-IixiscwjlbIH-VBg`,
        params: { 'acces_token': 'pk.eyJ1IjoicnZpbGVsbGEiLCJhIjoiY2tndTF6aGR0MTRzMTJ5cDI0czljNmYwayJ9.j01a5-IixiscwjlbIH-VBg' }
    });

    // instance.get()
    //     .then((resp) => {
    //         console.log(resp.data.features[0]);
    //     }).catch((err) => {
    //         console.log('Error', err);
    //     });

    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.features[0];
    const direccion = data.place_name;
    const lat = data.center[1];
    const lon = data.center[0];

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLon
}