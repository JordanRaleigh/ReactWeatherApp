import { WeatherEntry } from '../api/client';

interface PropsEntry {
  currentWeather: WeatherEntry;
}

//AdvancedWeather is a child component that will render on command. We are showing more weather information for better usability to our users.

const AdvancedWeather = (props: PropsEntry) => {
  const { main, wind, clouds, visibility } = props.currentWeather;
  return (
    <>
      <div className="weather-tag">
        <p>Humidity</p>
        <p>{Math.round(main.humidity)}%</p>
      </div>
      <div className="weather-tag">
        <p>Wind</p>
        <p>{Math.round(wind.speed)} mph</p>
      </div>
      <div className="weather-tag">
        <p>Cloud Coverage</p>
        <p>{Math.round(clouds.all)}%</p>
      </div>
      <div className="weather-tag">
        <p>Visibility</p>
        <p>{visibility} m</p>
      </div>
    </>
  );
};

export default AdvancedWeather;
