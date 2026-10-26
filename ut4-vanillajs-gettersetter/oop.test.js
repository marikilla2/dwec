import { Books } from "./oop.js";

describe("OOP", () => {
  it("should gets title, author and published for La vida del lazarillo de Tormes", () => {
    let book_1 = new Books(
      "La vida del lazarillo de Tormes",
      "Anonymous",
      "1554",
    );
    expect(book_1.title).toBe("La vida del lazarillo de Tormes");
    expect(book_1.author).toBe("Anonymous");
    expect(book_1.published).toBe("1554");
  });
  it("should gets title, author and published for The NeverEnding Story", () => {
    let book_2 = new Books();
    book_2.title = "The NeverEnding Story";
    book_2.author = "Michael Ende";
    book_2.published = "1984";
    expect(book_2.title).toBe("The NeverEnding Story");
    expect(book_2.author).toBe("Michael Ende");
    expect(book_2.published).toBe("1984");
  });
  it("should gets title, author and published for The Lord of the Rings", () => {
    let book_3 = new Books("The Lord of the Rings", "J. R. R. Tolkien", "1954");
    expect(book_3.title).toBe("The Lord of the Rings");
    expect(book_3.author).toBe("J. R. R. Tolkien");
    expect(book_3.published).toBe("1954");
  });
  it("should gets title, author and published for Beowulf", () => {
    let book_3 = new Books("Beowulf", "Anonymous", "900");
    expect(book_3.title).toBe("Beowulf");
    expect(book_3.author).toBe("Anonymous");
    expect(book_3.published).toBe("900");
  });
});
