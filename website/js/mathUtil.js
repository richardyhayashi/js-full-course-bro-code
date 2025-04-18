// mthUtil Module

const PI = 3.14159;

export function getCricumference(radius) {
   return 2 * PI * radius;
}

export function getArea(radius) {
   return PI * Math.pow(radius, 2);
}

export function getSurfaceArea(radius) {
   return 4 * PI * Math.pow(radius, 2)
}

export function getVolume(radius) {
   return (4 / 3) * PI * Math.pow(radius, 3);
}

export default PI;