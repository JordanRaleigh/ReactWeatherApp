import { WeatherEntry } from '../api/client';

interface PropsEntry {
  currentWeather: WeatherEntry;
}

//AdvancedWeather is a child component that will render on command. We are showing more weather information for better usability to our users.

const AdvancedWeather = (props: PropsEntry) => {
  return (
    <>
      <div className="weather-tag">
        <p>Humidity</p>
        <p>{props.currentWeather.main.humidity}%</p>
      </div>
      <div className="weather-tag">
        <p>Wind</p>
        <p>{props.currentWeather.wind.speed} mph</p>
      </div>
      <div className="weather-tag">
        <p>Cloud Coverage</p>
        <p>{props.currentWeather.clouds.all}%</p>
      </div>
      <div className="weather-tag">
        <p>Visibility</p>
        <p>{props.currentWeather.visibility} m</p>
      </div>
    </>
  );
};

export default AdvancedWeather;
