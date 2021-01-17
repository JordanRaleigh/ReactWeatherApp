import axios from "axios";

// NOTE: This includes a subset of the full response. Feel free to add more keys that you find valuable
export interface WeatherEntry {
  zipCode: number;
  clouds: { all: number };
  dt: number;
  main: {
    feels_like: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
    temp: number;
  };
  visibility: number
  name: string;
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: { speed: number };
}

// NOTE: API Docs can be found here: https://openweathermap.org/current
const key = "55019652a29de8dae744a7a05b11b581";

class Client {
  async getWeatherByZipCode(zipCode: number, errorCallback: (e: string)=> void) {
    try {
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${key}`
      );
      return res.data as WeatherEntry;
    } catch (error) {
      if(error) {
        errorCallback('invalid zipcode')
        return null }
    }

  }
}

export default new Client();
