var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ec70787aa5f0bf8be4c07a12db30a7e0&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    // api returns 404s, so this error handling no longer works
    // }, function (res) {
    //   throw new Error(res.data.message);
    // });
    }, function () {
      throw new Error('Invalid request!');
    });
  }
}