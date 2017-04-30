var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <p className="text-center">It’s {temp} in {location}</p>
  );
}

module.exports = WeatherMessage;