import { useState } from 'react';
import Client from '../api/client';

interface PropsEntry {
  fetchWeather: (zipCode: number, unit: string) => void;
  errorMessage?: string;
  className?: string;
}

//Header is a child of HomePage where we input our zipCode to show current data based on location.

const Header = (props: PropsEntry) => {
  // storing zipCode that the user inputs
  const [zipInput, setZipInput] = useState('');
  const [unit, setUnit] = useState('Imperial');
  //once submitted by pressing submit button or hitting enter, this will call fetchWeather with our zipInput
  const handleSubmission = () => {
    console.log('fetching from zip code : ', zipInput);
    props.fetchWeather(parseInt(zipInput), unit);
  };

  //rendering the input, allowing you to submit on the enter key or by clicking the submit button. If you submit an invalid zipCode, an error wil be displayed.
  return (
    <div className={props.className} style={{ height: '50vh' }}>
      <h1>Weather App</h1>
      <p>Enter your zip code below to see your weather.</p>
      <input
        type="number"
        className="form-control w-50 text-center"
        placeholder="ZIP Code"
        value={zipInput}
        onChange={(e) => {
          setZipInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmission();
        }}
      />
      {props.errorMessage && (
        <div className="alert alert-danger ">{props.errorMessage}</div>
      )}
      <input
        type="radio"
        id="Imperial"
        value={'Imperial'}
        checked={unit === 'Imperial'}
        onChange={(e) => {
          console.log(e.currentTarget.value);
          setUnit(e.currentTarget.value);
        }}
      />
      <label htmlFor="Imperial">Imperial</label>
      <input
        type="radio"
        id="Metric"
        value={'Metric'}
        checked={unit === 'Metric'}
        onChange={(e) => {
          console.log(e.currentTarget.value);
          setUnit(e.currentTarget.value);
        }}
      />
      <label htmlFor="Metric">Metric</label>
      <button className="btn btn-primary m-2" onClick={handleSubmission}>
        Submit
      </button>
      <button
        className="btn btn-link"
        onClick={() => {
          Client.getCurrentLocation(
            (myZipCode) => {
              setZipInput(myZipCode);
            },
            (e) => {
              alert(e);
            }
          );
        }}
      >
        Use Current Location
      </button>
    </div>
  );
};

export default Header;
