import { response } from "../vehicles-data.js";

export class Vehicle {
  #id;
  #type;
  #brand;
  #model;
  #year;
  pricePerDay;
  available;

  constructor(vehiculo) {
    this.#id = vehiculo.id;
    this.#type = vehiculo.type;
    this.#brand = vehiculo.brand;
    this.#model = vehiculo.model;
    this.#year = vehiculo.year;
    this.pricePerDay = vehiculo.pricePerDay;
    this.available = vehiculo.available;
  }

  get id() {
    return this.#id;
  }

  get type() {
    return this.#type;
  }

  get brand() {
    return this.#brand;
  }

  get model() {
    return this.#model;
  }

  get year() {
    return this.#year;
  }

  get pricePerDay() {
    return this.pricePerDay;
  }

  get available() {
    return this.available;
  }

  set id(value) {
    this.#id = value;
  }

  set type(value) {
    this.#type = value;
  }

  set brand(value) {
    this.#brand = value;
  }

  set model(value) {
    this.#model = value;
  }

  set year(value) {
    this.#year = value;
  }

  set pricePerDay(value) {
    this.pricePerDay = value;
  }

  set available(value) {
    this.available = value;
  }

  getInfo() {
    return `Id: ${this.#id} Type: ${this.#type} Brand: ${this.#brand} Model: ${this.#model} Year: ${this.#year} PricePerDay: ${this.pricePerDay} Available: ${this.available}`;
  }

  calculateRentalPrice(days) {
    let importeTotal = this.pricePerDay * days;
    return importeTotal;
  }

  isAvailable() {
    return this.available ? true : false;
  }
}
