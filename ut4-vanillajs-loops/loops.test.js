import * as loops from "./loops";

describe("loops for, do while and while", () => {
  it("should returns ['Juan', 'María', 'Carlos', 'Luisa', 'Ana'] with For", () => {
    expect(loops.getNameWithFor()[0]).toBe("Juan");
    expect(loops.getNameWithFor()[1]).toBe("María");
    expect(loops.getNameWithFor()[2]).toBe("Carlos");
    expect(loops.getNameWithFor()[3]).toBe("Luisa");
    expect(loops.getNameWithFor()[4]).toBe("Ana");
  });

  it("should returns ['Juan', 'María', 'Carlos', 'Luisa', 'Ana'] with Do While", () => {
    expect(loops.getNameWithDoWhile()[0]).toBe("Juan");
    expect(loops.getNameWithDoWhile()[1]).toBe("María");
    expect(loops.getNameWithDoWhile()[2]).toBe("Carlos");
    expect(loops.getNameWithDoWhile()[3]).toBe("Luisa");
    expect(loops.getNameWithDoWhile()[4]).toBe("Ana");
  });

  it("should returns ['Juan', 'María', 'Carlos', 'Luisa', 'Ana'] with While", () => {
    expect(loops.getNameWithWhile()[0]).toBe("Juan");
    expect(loops.getNameWithWhile()[1]).toBe("María");
    expect(loops.getNameWithWhile()[2]).toBe("Carlos");
    expect(loops.getNameWithWhile()[3]).toBe("Luisa");
    expect(loops.getNameWithWhile()[4]).toBe("Ana");
  });

  it("should returns [25, 30, 22, 28, 35] with For", () => {
    expect(loops.getAgeWithFor()[0]).toBe(25);
    expect(loops.getAgeWithFor()[1]).toBe(30);
    expect(loops.getAgeWithFor()[2]).toBe(22);
    expect(loops.getAgeWithFor()[3]).toBe(28);
    expect(loops.getAgeWithFor()[4]).toBe(35);
  });

  it("should returns [25, 30, 22, 28, 35] with Do While", () => {
    expect(loops.getAgeWithDoWhile()[0]).toBe(25);
    expect(loops.getAgeWithDoWhile()[1]).toBe(30);
    expect(loops.getAgeWithDoWhile()[2]).toBe(22);
    expect(loops.getAgeWithDoWhile()[3]).toBe(28);
    expect(loops.getAgeWithDoWhile()[4]).toBe(35);
  });

  it("should returns [25, 30, 22, 28, 35] with While", () => {
    expect(loops.getAgeWithWhile()[0]).toBe(25);
    expect(loops.getAgeWithWhile()[1]).toBe(30);
    expect(loops.getAgeWithWhile()[2]).toBe(22);
    expect(loops.getAgeWithWhile()[3]).toBe(28);
    expect(loops.getAgeWithWhile()[4]).toBe(35);
  });
});
