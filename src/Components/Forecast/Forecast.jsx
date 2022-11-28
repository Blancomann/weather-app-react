import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import s from './forecast.module.css';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {
  const today = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, today));
  // console.log(forecastDays);
  return(
    <>
      <label className={s.title}>Daily</label>
      <Accordion allowZeroExpanded>
        {
          data.list.splice(0, 7).map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className={s.dailyItem}>
                    <img className={s.icon} src={`icons/${item.weather[0].icon}.png`} alt="daily icon" />
                    <label className={s.day}>{forecastDays[index]}</label>
                    <label className={s.description}>{item.weather[0].description}</label>
                    <label className={s.minMax}>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className={s.dailyDetail}>
                  <div className={s.dailyDetailItem}>
                    <label>Pressure:</label>
                    <label>{item.main.pressure}hPa</label>
                  </div>
                  <div className={s.dailyDetailItem}>
                    <label>Humidity:</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className={s.dailyDetailItem}>
                    <label>Clouds:</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className={s.dailyDetailItem}>
                    <label>Wind speed:</label>
                    <label>{item.wind.speed}m/s</label>
                  </div>
                  <div className={s.dailyDetailItem}>
                    <label>Sea level:</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className={s.dailyDetailItem}>
                    <label>Feels like:</label>
                    <label>{item.main.feels_like}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))
        }
      </Accordion>
    </>
  )
}

export default Forecast;