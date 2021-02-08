import Header from './Header';
import Weather from './Weather';
import Client, { WeatherEntry } from '../api/client';
import React, { useState } from 'react';

//HomePage is the parent component to Header and Weather.

export default function HomePage() {
  //setting state for current weather as well as any error messages
  const [currentWeather, setCurrentWeather] = useState<null | WeatherEntry>(
    null
  );
  //using the state errorMessage to store any potential error messages
  const [errorMessage, setErrorMessage] = useState('');

  //fetchWeather will fetch weather data from the api and set the currentWeather state. If it returns an error, we will set errorMessage.
  const fetchWeather = async (zipCode: number, unit: string) => {
    let updatedWeather = await Client.getWeatherByZipCode(zipCode, unit);
    if (!updatedWeather) {
      return setErrorMessage('Could not get weather from ZIP code');
    }
    // since we successfully got data reset the error msg
    setErrorMessage('');
    setCurrentWeather({ ...updatedWeather, zipCode: zipCode, unit: unit });

    console.log(
      'The 🌤 API returned a WeatherEntry with data : ',
      updatedWeather
    );
  };

  //rendering child components Header and Weather if currentWeather exists
  return (
    <div className="container d-flex flex-column justify-content-center ">
      <Header
        className="align-items-center d-flex flex-column justify-content-center"
        fetchWeather={fetchWeather}
        errorMessage={errorMessage}
      />
      {currentWeather && (
        <Weather currentWeather={currentWeather} fetchWeather={fetchWeather} />
      )}
    </div>
  );
}
