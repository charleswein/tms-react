import {
 getData
} from "./models/requests.js";
import {
 Location
} from "./models/Location.js";
import {
 getProperty
} from "./view/renderPage.js";
import {
 dotsController
} from "./controller/dotsController.js";

const inputs = document.querySelectorAll(".form-control");
const form = document.querySelector('.form');
const nav = document.querySelector('.navigation');

nav.addEventListener('click', dotsController);

const locate = new Location('Minsk', 'Belarus');
let data = getData(locate);
getProperty(data);


form.addEventListener("submit", (e) => {
 e.preventDefault();
 let city, country;
 city = inputs[0].value;
 country = inputs[1].value;
 const locate = new Location(city, country);
 let data = getData(locate);
 getProperty(data);
 form.reset();
});