import { Person } from "./oop";

describe("OOP Person", () => {
  it("should gets name, surname, country and age", () => {
    let person = new Person("John", "Doe", "USA", 32);
    expect(person.name).toBe("John");
    expect(person.surname).toBe("Doe");
    expect(person.country).toBe("USA");
    expect(person.age).toBe(32);
  });
  it("should sets name = Peter, surname = Jackson, country = CANADA and age = 39", () => {
    let person = new Person("John", "Doe", "USA", 32);
    person.name = "Peter";
    person.surname = "Jackson";
    person.country = "CANADA";
    person.age = 39;
    expect(person.name).toBe("Peter");
    expect(person.surname).toBe("Jackson");
    expect(person.country).toBe("CANADA");
    expect(person.age).toBe(39);
  });
});
