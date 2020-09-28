import {
 arr
} from "../store/dotsData.js";
import {
 getProperty
} from "../view/renderPage.js";
import {
 getData
} from "../models/requests.js";

const dots = document.querySelectorAll('.dot');

dots.forEach((elem, index) => {
 elem.dataset.id = index;
});

export function dotsController(e) {
 dots.forEach((elem) => {
  elem.classList.remove('dot--active');
 });
 if (!e.target.classList.contains('dot--active') && e.target.classList.contains('dot')) {
  e.target.classList.add('dot--active');
  const locate = arr[e.target.dataset.id];
  let data = getData(locate);
  getProperty(data);
 }
}