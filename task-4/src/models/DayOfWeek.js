export function dayOfWeek(day) {

 let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Monday', 'Saturday'];

 return days[day.getDay()];
}