import * as literals from "./literals-objects";

describe("Access to the properties of person object literal", () => {
  it("should returns the street of person object", () => {
    expect(literals.getStreet()).toBe("C/ Larios");
  });

  it("should returns the country of person object", () => {
    expect(literals.getCountry()).toBe("USA");
  });

  it("should returns the age of person object", () => {
    expect(literals.getAgeViaFuction()).toBe(32);
  });

  it("should remove the number property of person object", () => {
    literals.removeNumbreAddressProperty();
    expect(literals.getNumbreAddress()).toBe(undefined);
  });

  it("should adds the Spanish nacionality to person object", () => {
    literals.addSpanishNacionalityAsNewProperty();
    expect(literals.getNacionalty()).toBe("Spanish");
  });

  it("should returns a array of object person", () => {
    let personArray = literals.getPersonArray();
    expect(personArray[0][0]).toBe("name");
    expect(personArray[1][0]).toBe("surname");
    expect(personArray[2][0]).toBe("country");
    expect(personArray[3][0]).toBe("age");
    expect(personArray[4][0]).toBe("getAge");
    expect(personArray[5][0]).toBe("address");
  });
});

describe("Access to the properties of movie object literal", () => {
  it("should returns the birthday of diretor", () => {
    expect(literals.getBirthdayOfDirector()).toBe("31 de octubre de 1961");
  });

  it("should returns the title of movie object", () => {
    expect(literals.getTitle()).toBe(
      "El Señor de los Anillos: La Comunidad del Anillo",
    );
  });

  it("should returns the last principal film of director", () => {
    expect(literals.getLastPrincipalOfDirector()).toBe("King Kong");
  });

  it("should returns the Gandalf description", () => {
    expect(literals.getDescriptionOfGandalf()).toBe(
      "Un poderoso mago y consejero que guía a Frodo en su misión.",
    );
  });

  it("should returns the numbers of characters", () => {
    expect(literals.getNumbersOfCharacters()).toBe(3);
  });

  it("should returns the real name of Aragorn", () => {
    expect(literals.getRealOfAragorn()).toBe("Viggo Mortensen");
  });

  it("should returns all keys of movie object", () => {
    let movieKeys = literals.getMovieKeys();
    expect(movieKeys[0]).toBe("title");
    expect(movieKeys[1]).toBe("director");
    expect(movieKeys[2]).toBe("year");
    expect(movieKeys[3]).toBe("genre");
    expect(movieKeys[4]).toBe("duration");
    expect(movieKeys[5]).toBe("rating");
    expect(movieKeys[6]).toBe("characters");
    expect(movieKeys[7]).toBe("synopsis");
  });

  it("should returns the index of Fantasía value", () => {
    expect(literals.getIndexOfFantasaiValue()).toBe(3);
  });
});
