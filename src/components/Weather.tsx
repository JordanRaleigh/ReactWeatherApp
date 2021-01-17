import CountDown from './CountDown';
import { WeatherEntry } from '../api/client';
import { useState } from 'react';
import AdvancedWeather from './AdvancedWeather';

interface PropsEntry {
  fetchWeather: (...args: any[]) => void;
  currentWeather: WeatherEntry;
}

const Weather: React.FC<PropsEntry> = (props: PropsEntry) => {
  const [moreDetailsEnabled, setMoreDetailsenabled] = useState(false);

  return (
    <div className="">
      <h2>Local Weather in {props.currentWeather.name}</h2>
      <p>
        In your zip code <b>({props.currentWeather.zipCode})</b>, the weather
        is:
      </p>
      <table>
        <tbody>
          <tr>
            <td>Temperature</td>
            <td>{props.currentWeather.main.temp} &deg;F</td>
          </tr>
          <tr>
            <td>Feels Like</td>
            <td>{props.currentWeather.main.feels_like} &deg;F</td>
          </tr>
          {props.currentWeather.weather.map((item) => {
            return (
              <tr>
                <td>{item.main}</td>
                <td>{item.description}</td>
              </tr>
            );
          })}
          {moreDetailsEnabled ? (
            <AdvancedWeather currentWeather={props.currentWeather} />
          ) : (
            ''
          )}
        </tbody>
      </table>
      <button
        className="btn btn-link"
        onClick={() => {
          setMoreDetailsenabled((moreDetailsEnabled) => !moreDetailsEnabled);
        }}
      >
        {moreDetailsEnabled ? 'less' : 'more'} details
      </button>
      <CountDown
        updateWeather={() => {
          props.fetchWeather(props.currentWeather.zipCode, true);
        }}
      />
    </div>
  );
};

export default Weather;
