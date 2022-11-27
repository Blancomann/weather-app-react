import React from "react";
import s from "./currentWeather.module.css";

const CurrentWeather = () => {
  return (
    <div className={s.weather}>
      <div className={s.top}>
        <div>
          <p className={s.city}>Belgrade</p>
          <p className={s.description}>Sunny</p>
        </div>
        <img className={s.icon} src="icons/01d.png" alt="weather" />
      </div>
      <div className={s.bottom}>
        <p className={s.temperature}>33°C</p>
        <div className={s.details}>
          <div className={s.parameterRow}>
            <span className={s.parameterLabelDetails}>Details</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Feels like</span>
            <span className={s.parameterValue}>36°C</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Wind</span>
            <span className={s.parameterValue}>2 m/s</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Humidity</span>
            <span className={s.parameterValue}>15%</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Pressure</span>
            <span className={s.parameterValue}>10hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
