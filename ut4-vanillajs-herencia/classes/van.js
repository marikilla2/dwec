import { Vehicle } from "./vehicle.js";
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
