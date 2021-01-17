import { WeatherEntry } from '../api/client';

interface PropsEntry {
  currentWeather: WeatherEntry;
}

const AdvancedWeather = (props: PropsEntry) => {
  return (
    <>
      <tr>
        <td>Humidity</td>
        <td>{props.currentWeather.main.humidity}%</td>
      </tr>
      <tr>
        <td>Wind</td>
        <td>{props.currentWeather.wind.speed} mph</td>
      </tr>
      <tr>
        <td>Min Temp</td>
        <td>{props.currentWeather.main.temp_min} &deg;F</td>
      </tr>
      <tr>
        <td>Max Temp</td>
        <td>{props.currentWeather.main.temp_max} &deg;F</td>
      </tr>
      <tr>
        <td>Cloud Coverage</td>
        <td>{props.currentWeather.clouds.all}%</td>
      </tr>
      <tr>
        <td>Visibility</td>
        <td>{props.currentWeather.visibility} m</td>
      </tr>
    </>
  );
};

export default AdvancedWeather;
