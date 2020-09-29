import {
 dayOfWeek
} from '../models/DayOfWeek.js';
export async function getProperty(arg) {

 let day = new Date();
 let weekDay = dayOfWeek(day);


 let info = await arg;
 let {
  current,
  location
 } = info;
 let {
  temperature,
  observation_time,
  wind_degree,
  feelslike,
  wind_speed,
  weather_descriptions,
  pressure,
  weather_icons
 } = current;
 let {
  country,
  name,
  localtime,
  timezone_id
 } = location;
 localtime = localtime.substr(-5);
 timezone_id = timezone_id.split('/')[0];
 document.querySelector('.temperature').innerText = `${temperature}°C`;
 document.querySelector('.heading-secondary').innerText = `${timezone_id}/${name}`;
 document.querySelector('.temperature__descr').innerText = `${weather_descriptions[0]}`;
 document.querySelector('.heading-primary').innerText = `${weekDay}`;
 document.querySelector('.card__wind--value').innerText = `${wind_degree}°C`;
 document.querySelector('.card__speed--value').innerText = `${wind_speed} k/h`;
 document.querySelector('.card__pressure--value').innerText = `${pressure} MB`;
 document.querySelector('.card__time--value').innerText = `${localtime}`;
 document.querySelector('.logo').src = weather_icons;
}