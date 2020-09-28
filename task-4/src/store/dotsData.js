import {
 Location
} from '../models/Location.js';

let arr = [];

const belarus = new Location('Minsk', 'Belarus'),
 russia = new Location('Saint-Petersburg', 'Russia'),
 france = new Location('Paris', 'France');
arr.push(belarus, russia, france);
export {
 arr
};