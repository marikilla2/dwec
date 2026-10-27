import { Vehicle } from "./vehicle";

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
