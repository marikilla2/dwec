export class Books {
  #title;
  #author;
  published;

  constructor(title = "", author = "", published = "") {
    this.#title = title;
    this.#author = author;
    this.published = published;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    if (typeof value === "string" && value.trim() !== "") {
      this.#title = value;
    }
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    if (typeof value === "string" && value.trim() !== "") {
      this.#author = value;
    }
  }
}
