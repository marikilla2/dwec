const body = document.querySelector("body");
body.classList.add("p-3", "m-0", "border-0", "bd-example");

const div = document.createElement("div");
div.classList.add("list-group");

body.append(div);

// const a = document.createElement("a");
// a.setAttribute("href", "#");
// a.classList.add("list-group-item", "list-group-item-action");

// a.textContent = "A simple default list group item";

// div.append(a);

const array = [
  "default",
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

array.forEach((element) => {
  const a2 = document.createElement("a");
  a2.setAttribute("href", "#");
  a2.classList.add("list-group-item", "list-group-item-action");

  if (element != "default") {
    a2.classList.add(`list-group-item-${element}`);
  }
  a2.textContent = `A simple ${element} list group item`;
  div.append(a2);
});
