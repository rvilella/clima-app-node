const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=47a1b66f78d38321933b57e488a4ccd6&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}