import Header from './Header';
import Weather from './Weather';
import Client, { WeatherEntry } from '../api/client';
import React, { useState } from 'react';

//HomePage is the parent component to Header and Weather.

export default function HomePage() {
  //setting state for current weather as well as any error messages
  const [currentWeather, setcurrentWeather] = useState<null | WeatherEntry>(
    null
  );
  const [errorMessage, seterrorMessage] = useState('');

  //fetchWeather will be called once we input a zip code to fetch from the api and store the response as currentWeather. If it returns an error from an invalid zipcode, we will store the error to display.
  const fetchWeather = async (zipCode: number, isUpdate?: boolean) => {
    let updatedWeather = await Client.getWeatherByZipCode(
      zipCode,
      (e: string) => {
        seterrorMessage(e);
      }
    );
    if (!updatedWeather) return console.log('error invalid zipcode');
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

  //rendering child components Header and Weather if currentWeather exists
  return (
    <div className="container d-flex flex-column justify-content-center ">
      <Header
        className="align-items-center d-flex flex-column justify-content-center"
        fetchWeather={fetchWeather}
        errorMes={errorMessage}
      />
      {currentWeather ? (
        <Weather currentWeather={currentWeather} fetchWeather={fetchWeather} />
      ) : (
        ''
      )}
    </div>
  );
}
