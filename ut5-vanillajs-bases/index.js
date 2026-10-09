window.alert("This is an alert message. Click me to move on!!");

const input = window.confirm("Show me in an alert if you clicked ok or false");

if (input) {
  window.alert("You clicked on true so you can move on!");
  let respuesta = window.prompt("Show me in an alert the message typed");

  if (respuesta == "") {
    window.alert("You typed null click me to move on!!");
  } else {
    window.alert("You typed " + respuesta + " click me to move on!!");
  }
} else {
  window.alert("You clicked on false so you can move on!");
}
