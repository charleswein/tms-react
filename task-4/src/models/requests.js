export async function getData(location) {
 let {
  city,
  country
 } = location;
 const YOUR_ACCESS_KEY = 'aebd7142a2f1343e0cb2707baa0b9e21';
 const res = await fetch(`http://api.weatherstack.com/current?access_key=${YOUR_ACCESS_KEY}&query="${city} ${country}"`);
 const data = await res.json();
 console.log(data);
 return data;
}