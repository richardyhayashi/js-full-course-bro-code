// ES6 Modules

import PI, {getCricumference, getArea, getVolume, getSurfaceArea} from "./mathUtil.js";


console.log(PI);
const circumference = getCricumference(10);
const area = getArea(10);
const surfaceArea = getSurfaceArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${surfaceArea.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);
