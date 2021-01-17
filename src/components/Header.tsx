import { useState } from 'react';
import Client, { WeatherEntry } from '../api/client';

interface PropsEntry {
  fetchWeather: (...args: any[]) => void;
  errorMes?: string;
  className?: string;
}

//Header is a child of HomePage where we input our zipCode to show current data based on location.

const Header = (props: PropsEntry) => {
  // storing zipCode that the user inputs
  const [zipInput, setZipInput] = useState('');

  //once submitted by pressing submit button or hitting enter, this will use the fetchWeather Prop to use our zipCode input to bring back current weather data for our area.
  const handleSubmission = () => {
    console.log('fetching from zip code : ', zipInput);
    props.fetchWeather(parseInt(zipInput));
  };

  //rendering the input, allowing you to submit on the enter key or by clicking the submit button. If you submit an invalid zipCode, an error wil be displayed.
  return (
    <div className={props.className} style={{ height: '50vh' }}>
      <h1 className="">Weather App</h1>
      <p>Enter your zip code below to see your weather.</p>
      <input
        type="number"
        className="form-control w-50 text-center"
        placeholder="ZIP Code"
        onChange={(e) => {
          setZipInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == 'Enter') handleSubmission();
        }}
      />
      <div className={'alert alert-danger ' + (props.errorMes ? '' : 'd-none')}>
        {props.errorMes}
      </div>
      <button className="btn btn-primary m-2" onClick={handleSubmission}>
        submit
      </button>
    </div>
  );
};

export default Header;
