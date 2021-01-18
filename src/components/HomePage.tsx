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
  //using the state errorMessage to store any potential error messages
  const [errorMessage, seterrorMessage] = useState('');

  //fetchWeather will fetch weather data from the api and set the currentWeather state. If it returns an error, we will set errorMessage.
  const fetchWeather = async (zipCode: number) => {
    let updatedWeather = await Client.getWeatherByZipCode(zipCode);
    if (!updatedWeather) {
      return seterrorMessage('Could not get weather from zipcode');
    }
    // since we successfully got data reset the error msg
    seterrorMessage('');
    setcurrentWeather({ ...updatedWeather, zipCode: zipCode });

    console.log(
      'The 🌤 API returned a WeatherEntry with data : ',
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
