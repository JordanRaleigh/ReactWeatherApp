import Header from './Header';
import Layout from './Layout';
import Weather from './Weather';
import Client, { WeatherEntry } from '../api/client';
import React, { useState } from 'react';
import WeatherSVG from './svg/weather-artwork-svg';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  const [currentWeather, setcurrentWeather] = useState<null | WeatherEntry>(
    null
  );

  const [errorMessage, seterrorMessage] = useState('');

  const fetchWeather = async (zipCode: number, isUpdate?: boolean) => {
    let updatedWeather = await Client.getWeatherByZipCode(
      zipCode,
      (e: string) => {
        seterrorMessage(e);
      }
    );
    if (!updatedWeather) return console.log('erro invalid zipcode');
    if (!isUpdate) seterrorMessage('');
    setcurrentWeather({ ...updatedWeather, zipCode: zipCode });

    console.log(
      updatedWeather
        ? 'The 🌤 API returned a WeatherEntry with data : '
        : 'invalid zip code',
      updatedWeather
    );
    return updatedWeather;
  };

  return (
    <div className="container ">
      <div className="card">
        <div className="row align-items-center justify-content-center ">
          <div className="col-md-4">
            <Header fetchWeather={fetchWeather} errorMes={errorMessage} />
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          {currentWeather ? (
            <Weather
              currentWeather={currentWeather}
              fetchWeather={fetchWeather}
            />
          ) : (
            <WeatherSVG />
          )}
        </div>
      </div>
    </div>
  );
}
