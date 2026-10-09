window.alert("This is an alert message. Click me to move on!!");

const INPUT = window.confirm("Show me in an alert if you clicked ok or false");
const PLACEHOLDER = "Type something";

if (INPUT) {
  window.alert("You clicked on true so you can move on!");
  let respuesta = window.prompt(
    "Show me in an alert the message typed",
    PLACEHOLDER,
  );

  if (respuesta == "") {
    window.alert("You typed null click me to move on!!");
  } else {
    window.alert("You typed " + respuesta + " click me to move on!!");
  }
} else {
  window.alert("You clicked on false so you can move on!");
}
