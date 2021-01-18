import CountDown from './CountDown';
import { WeatherEntry } from '../api/client';
import { useState } from 'react';
import AdvancedWeather from './AdvancedWeather';

interface PropsEntry {
  fetchWeather: (zipCode: number, isUpdate?: boolean) => void;
  currentWeather: WeatherEntry;
}

//Weather will use our currentWeather to display the current weather in a certain zip code. The child component CountDown is rendering here.

const Weather: React.FC<PropsEntry> = (props: PropsEntry) => {
  //Initially showing only important weather details and can toggle more advanced details.
  const [moreDetailsEnabled, setMoreDetailsEnabled] = useState(false);
  const { main, name, weather, zipCode } = props.currentWeather;

  //rendering important weather data and passing the fetchWeather prop down to CountDown so we can refresh. Also rendering a button to display advanced weather details on command.

  return (
    <div className="row w-75 m-auto justify-content-center ">
      <div className="col-md-6 text-center">
        <h2>
          In <span className="text-underline display-4">{name}</span>, it is
        </h2>
        <div
          className="display-4"
          style={{
            color: main.temp > 75 ? '#FA6B6E' : '#84B4FE',
          }}
        >
          {Math.round(main.temp)}&deg; F
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
          alt="current-weather-icon"
        ></img>
      </div>
      <div className="col-md-6 flex-column text-center">
        <div className="weather-tag">
          <p>Feels Like</p>
          <p className="">{Math.round(main.feels_like)} &deg;F</p>
        </div>
        <div className="weather-tag">
          <p>High</p>
          <p>{Math.round(main.temp_max)} &deg;F</p>
        </div>
        <div className="weather-tag">
          <p>Low</p>
          <p>{Math.round(main.temp_min)} &deg;F</p>
        </div>
        {weather.map((item, index) => {
          return (
            <div className="weather-tag" key={index}>
              <p>
                {item.main}
                <img
                  src={`http://openweathermap.org/img/wn/${item.icon}.png`}
                ></img>
              </p>
              <p className="">{item.description}</p>
            </div>
          );
        })}

        {moreDetailsEnabled && (
          <AdvancedWeather currentWeather={props.currentWeather} />
        )}
        <button
          className="btn btn-link"
          onClick={() => {
            setMoreDetailsEnabled((moreDetailsEnabled) => !moreDetailsEnabled);
          }}
        >
          {moreDetailsEnabled ? 'Less' : 'More'} Details
        </button>
      </div>
      <CountDown
        updateWeather={() => {
          props.fetchWeather(zipCode);
        }}
      />
    </div>
  );
};

export default Weather;
