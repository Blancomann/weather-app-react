import Search from "./Components/Search/Search.jsx";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather.jsx";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api.js";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherRes = await res[0].json();
        const forecastRes = await res[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setforecast({ city: searchData.label, ...forecastRes });
      })
      .catch((err) => console.log(err));

    console.log(currentWeather);
    console.log(forecast);
  };

  return (
    <div className="main-container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
