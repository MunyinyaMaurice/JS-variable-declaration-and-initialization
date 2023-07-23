import { rideTime, rideSpeed } from "./constants.js";

function calculateDistance(speed, time) {
  return speed * time;
}

let distance = calculateDistance(rideSpeed, rideTime);

console.log("Distance is a product of speed and time: " + distance + " km");
