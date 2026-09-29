import * as sc from "./switch-case";

describe("switch-case days of week", () => {
  it('should returns "Lunes" for the number 1', () => {
    expect(sc.getDayOfWeekSC(1)).toBe("Lunes");
    expect(sc.getDayOfWeekObject(1)).toBe("Lunes");
  });

  it('should returns "Martes" for the number 2', () => {
    expect(sc.getDayOfWeekSC(2)).toBe("Martes");
    expect(sc.getDayOfWeekObject(2)).toBe("Martes");
  });

  it('should returns "Miércoles" for the number 3', () => {
    expect(sc.getDayOfWeekSC(3)).toBe("Miércoles");
    expect(sc.getDayOfWeekObject(3)).toBe("Miércoles");
  });

  it('should returns "Jueves" for the number 4', () => {
    expect(sc.getDayOfWeekSC(4)).toBe("Jueves");
    expect(sc.getDayOfWeekObject(4)).toBe("Jueves");
  });

  it('should returns "Viernes" for the number 5', () => {
    expect(sc.getDayOfWeekSC(5)).toBe("Viernes");
    expect(sc.getDayOfWeekObject(5)).toBe("Viernes");
  });
  it('should returns "Sábado" for the number 6', () => {
    expect(sc.getDayOfWeekSC(6)).toBe("Sábado");
    expect(sc.getDayOfWeekObject(6)).toBe("Sábado");
  });
  it('should returns "Domingo" for the number 7', () => {
    expect(sc.getDayOfWeekSC(7)).toBe("Domingo");
    expect(sc.getDayOfWeekObject(7)).toBe("Domingo");
  });

  it('should returns "Número de día inválido" outside the range 1-7', () => {
    expect(sc.getDayOfWeekSC(8)).toBe("Número de día inválido");
    expect(sc.getDayOfWeekObject(8)).toBe("Número de día inválido");
  });
});

describe("switch-case simple calcular", () => {
  it("should returns 7", () => {
    expect(sc.simpleCalculatorSC("+", 5, 2)).toBe(7);
    expect(sc.simpleCalculatorObject("+", 5, 2)).toBe(7);
  });

  it("should returns -2", () => {
    expect(sc.simpleCalculatorSC("-", 8, 10)).toBe(-2);
    expect(sc.simpleCalculatorObject("-", 8, 10)).toBe(-2);
  });

  it("should returns 24", () => {
    expect(sc.simpleCalculatorSC("*", 6, 4)).toBe(24);
    expect(sc.simpleCalculatorObject("*", 6, 4)).toBe(24);
  });

  it("should returns 5", () => {
    expect(sc.simpleCalculatorSC("/", 35, 7)).toBe(5);
    expect(sc.simpleCalculatorObject("/", 35, 7)).toBe(5);
  });

  it('should returns "Operator invalid"', () => {
    expect(sc.simpleCalculatorSC("$", 35, 7)).toBe("Operator invalid");
    expect(sc.simpleCalculatorObject("$", 35, 7)).toBe("Operator invalid");
  });
});
