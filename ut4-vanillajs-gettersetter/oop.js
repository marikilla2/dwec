class Books {
  #title;
  #author;
  published;
  constructor(book) {
    this.#title = book.#title;
    this.#author = book.#author;
    this.published = book.published;
  }

  get title() {
    return this.book.title;
  }
  get author() {
    return this.book.author;
  }
  get published() {
    return this.book.published;
  }

  set title(book) {}
  set author(book) {}
  set published(book) {}
}
