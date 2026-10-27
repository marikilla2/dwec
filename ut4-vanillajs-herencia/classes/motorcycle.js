import { Vehicle } from "./vehicle";
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
