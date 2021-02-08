import axios from "axios";

// NOTE: This includes a subset of the full response. Feel free to add more keys that you find valuable
export interface WeatherEntry {
  unit: string;
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
const key = "cce044b93d1a141d6465a6314b631380";

class Client {
  async getWeatherByZipCode(zipCode: number, unit: string) {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=${unit}&appid=${key}`
      );
      return res.data as WeatherEntry;
    } catch (error) {
      if(error) {
        console.log("error with getWeatherByZipCode API")
        return null
      }
    }
  }

  //API to get client location (zipcode) by IP address
  async getCurrentLocation(
    success: (zip: string) => void,
    errorCb: (message: string) => void
  ) {
    try {
      const res = await axios.get(`https://freegeoip.app/json/`);
      if (res.data.zip_code){
        console.log(res)
        console.log(res.data.zip_code)
        return success(res.data.zip_code);
      } else {
        return errorCb("could not get your location (feature only works in the US)");
      }
    } catch (error) {
      errorCb("error in getCurrentLocation")
    }
  }
}

export default new Client();
