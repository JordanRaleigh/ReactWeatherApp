# Overview

Welcome to my Ternary code challenge Weather App built utilizing TypeScript and React.

[View Demo Site](https://jordan-weather-app.netlify.app/)

A user is able to input their ZIP code or click "Use Current Location" to pull location data by IP address. To see more advanced weather details, click "More Details" on the bottom of the page. This app will auto-update every 10 seconds to ensure the most accurate data is being displayed to a user.

![screenshot](./WeatherApp.gif)

## Changes Made

From the initial file, I connected all components using React and made components functional. Here is a list of major additions.

- Client class
  - Added API freegeoip.app to pull a users location data based on their IP address
  - Changed the interface to include weather icon data
- Main React Components
  - Homepage
    - Stores the current weather state as well as any error messages we receive and need to display.
- Header
  - I added a ZIP code state as well as an input box that can be submitted by pressing the enter key or submit button .
  - added an error popup if something goes wrong such as inputting an invalid ZIP code.
    ![screenshot](./Weather-app-errorHandling.png)
  - added a "Get Current Location" button gets the current location from API.
- Weather
  - Dynamically rendered the weather data as well as allowing the option to show more details.
  - Added corresponding icons for the type of weather
  - Changes color based on temperature
    ![screenshot](./weather-app-icon.png)
- AdvancedWeather (new component)
  - shows additional weather information
- CountDown (new component)

  - keeps track of seconds using `useState`, `useEffect`, and `setTimeout` that will countdown until 0 where it will refresh the data with the current ZIP code.

- Styling
  - removed table tag styling
  - imported a new google font called "Jost"
  - made the app responsive using `bootstrap.css`

I've also included a `Dockerfile` with instructions on how to run using Docker. Thanks for checking out my app and my code!

## Getting Started

```terminal
git clone https://github.com/JordanRaleigh/ReactWeatherApp.git
cd ReactWeatherApp
npm install
npm start
```

Open http://localhost:9001 to view it in the browser.

## Run the app in prod

```
 npm run build
```

## Run the app in Docker

```
docker build . -t "image name"
docker image ls
docker run "image name"
```

NOTE: replace `"image name"` with your desired image name

```
docker ps
docker exec -it "CONTAINER ID" sh
npm start
```

NOTE: replace `"CONTAINER ID"` with the respective container id

# Parking Lot

I would have loved to implement the following to my weather app given more time

Testing

- Add Mocha and Chai testing frameworks
- Build out unit testing for all functions
- Build integration testing on each broken out component
