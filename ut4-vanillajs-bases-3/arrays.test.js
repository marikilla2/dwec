import * as arrays from "./arrays";

describe("Basics array methos", () => {
  it("should removes first element from array", () => {
    expect(arrays.deleteFirtPosition()).toBe("Zelda");
  });

  it("should removes last element from array", () => {
    expect(arrays.deleteLastPosition()).toBe("Chrono");
  });

  it("should inserts new element at the start of an array", () => {
    expect(arrays.addFirstPosition("Fornite")).toBe(3);
    expect(arrays.games[0]).toBe("Fornite");
  });

  it("should appends new element to the end of an array", () => {
    expect(arrays.addLastPosition("Pokemon")).toBe(4);
    expect(arrays.games[arrays.games.length - 1]).toBe("Pokemon");
  });
});

describe("Removes elements via splice", () => {
  it("should removes Baratheon and Greyjoy houses", () => {
    const housesRemoved = arrays.removeBaratheonAndGreyjoy();
    expect(housesRemoved[0]).toBe("Baratheon");
    expect(housesRemoved[1]).toBe("Greyjoy");
    expect(arrays.got.length).toBe(5);
  });

  it("should removes Arryn houses", () => {
    const housesRemoved = arrays.removeArryn();
    expect(housesRemoved[0]).toBe("Arryn");
    expect(arrays.got.length).toBe(4);
  });
});

describe("Gets indexs by Naruto Characters", () => {
  it("should returns Naruto index", () => {
    expect(arrays.getNaruto()).toBe(0);
  });

  it("should returns Gaara index", () => {
    expect(arrays.getGaara()).toBe(arrays.narutoCharacters.length - 1);
  });

  it("should returns Rock Lee index(-1)", () => {
    expect(arrays.getRockLee()).toBe(-1);
  });

  it("should returns the naruto characters array inverse", () => {
    let narutoCharactersExpected = [
      "Gaara",
      "Itachi",
      "Jiraiya",
      "Kakashi",
      "Hinata",
      "Sakura",
      "Sasuke",
      "Naruto",
    ];
    let narutoCharactersRecived = arrays.reverseNarutoCharacters();
    narutoCharactersRecived.forEach((character, index) => {
      expect(character).toBe(narutoCharactersExpected[index]);
    });
  });
});
