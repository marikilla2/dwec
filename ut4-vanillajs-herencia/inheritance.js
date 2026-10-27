const response = {
  status: "success",
  data: [
    {
      id: 1,
      type: "car",
      brand: "Toyota",
      model: "Corolla",
      year: 2023,
      pricePerDay: 45,
      available: true,
      doors: 5,
      seats: 5,
    },
    {
      id: 2,
      type: "motorcycle",
      brand: "Yamaha",
      model: "MT-07",
      year: 2022,
      pricePerDay: 30,
      available: true,
      engineCapacity: 689,
      licenseType: "A",
    },
    {
      id: 3,
      type: "van",
      brand: "Ford",
      model: "Transit",
      year: 2021,
      pricePerDay: 75,
      available: false,
      loadCapacity: 1200,
    },
    {
      id: 4,
      type: "car",
      brand: "Seat",
      model: "León",
      year: 2024,
      pricePerDay: 50,
      available: true,
      doors: 5,
      seats: 5,
    },
    {
      id: 5,
      type: "motorcycle",
      brand: "Honda",
      model: "CB500F",
      year: 2023,
      pricePerDay: 25,
      available: true,
      engineCapacity: 471,
      licenseType: "A2",
    },
    {
      id: 6,
      type: "van",
      brand: "Mercedes-Benz",
      model: "Vito",
      year: 2022,
      pricePerDay: 90,
      available: true,
      loadCapacity: 950,
    },
  ],
};

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

export class Car extends Vehicle {
  doors;
  seats;

  constructor(vehiculo) {
    super(vehiculo);
    this.doors = vehiculo.doors;
    this.seats = vehiculo.seats;
  }

  getInfo() {
    return `Id: ${this.id} Type: ${this.type} Brand: ${this.brand} Model: ${this.model} Year: ${this.year} PricePerDay: ${this.pricePerDay} Available: ${this.available} Doors: ${this.doors} Seats: ${this.seats}`;
  }

  calculateRentalPrice(days) {
    let precio = super.calculateRentalPrice(days);
    if (days >= 7) {
      precio *= 0.9;
    }
    return precio;
  }
}

export class Motorcycle extends Vehicle {
  engineCapacity;
  licenseType;

  constructor(vehiculo) {
    super(vehiculo);
    this.engineCapacity = vehiculo.engineCapacity;
    this.licenseType = vehiculo.licenseType;
  }

  getInfo() {
    return `Id: ${this.id} Type: ${this.type} Brand: ${this.brand} Model: ${this.model} Year: ${this.year} PricePerDay: ${this.pricePerDay} Available: ${this.available} EngineCapacity: ${this.engineCapacity} LicenseType: ${this.licenseType}`;
  }

  calculateRentalPrice(days) {
    return super.calculateRentalPrice(days) + 15;
  }
}

export class Van extends Vehicle {
  loadCapacity;

  constructor(vehiculo) {
    super(vehiculo);
    this.loadCapacity = vehiculo.loadCapacity;
  }

  getInfo() {
    return `Id: ${this.id} Type: ${this.type} Brand: ${this.brand} Model: ${this.model} Year: ${this.year} PricePerDay: ${this.pricePerDay} Available: ${this.available} LoadCapacity: ${this.loadCapacity}`;
  }

  calculateRentalPrice(days) {
    return super.calculateRentalPrice(days) + 20;
  }
}

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
