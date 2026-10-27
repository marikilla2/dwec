import { Car } from "./classes/car.js";
import { Motorcycle } from "./classes/motorcycle.js";
import { Van } from "./classes/van";
let coche = new Car({
  id: 1,
  type: "car",
  brand: "Toyota",
  model: "Corolla",
  year: 2023,
  pricePerDay: 45,
  available: true,
  doors: 5,
  seats: 5,
});
let furgoneta = new Van({
  id: 3,
  type: "van",
  brand: "Ford",
  model: "Transit",
  year: 2021,
  pricePerDay: 75,
  available: false,
  loadCapacity: 1200,
});
let motocicleta = new Motorcycle({
  id: 2,
  type: "motorcycle",
  brand: "Yamaha",
  model: "MT-07",
  year: 2022,
  pricePerDay: 30,
  available: true,
  engineCapacity: 689,
  licenseType: "A",
});

let vehicles = [coche, furgoneta, motocicleta];

vehicles.forEach((vehiculo) => console.log(vehiculo.getInfo()));

vehicles.forEach((vehiculo) => console.log(vehiculo.calculateRentalPrice(5)));
