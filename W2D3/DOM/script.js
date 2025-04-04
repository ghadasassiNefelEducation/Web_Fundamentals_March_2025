function addToCard(selector) {
  var titleElement = document.querySelector(selector);

  alert(titleElement.innerText + " was added to your card");
}

function hovered(elt) {
  elt.style.backgroundColor = "red";
}
function unhovered(elt) {
  elt.style.backgroundColor = "green";
}

function zoom(elt) {
  elt.style.width = "250px";
}

function zoomout(elt) {
  elt.style.width = "200px";
}
var clicked = false;
function showInput(elt) {
  var div = document.querySelector(elt);
  clicked = !clicked;
  if (clicked) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

function showComment(paragraph, content) {
  var p = document.querySelector(paragraph);
  // var input = document.querySelector(content)
  p.textContent = content.value;
}

var person = {
    "firstName": "Joe",
    "email": "a@a.a",
    "age": 20,
    "favoriteSports": ["sleep", "swimming", "football",{"other":["basketball","cricket"]}]
};
console.log(person.favoriteSports[1])
console.log(person.age)
person.email = "b@b.b"
console.log(person.email)
person.favoriteSports[0] = "tennis"
console.log(person.favoriteSports)
console.log(person.favoriteSports[3].other)
console.log(person.favoriteSports[3].other[1])
function chooseLunch(element) {
    alert("You picked " + element.value);
}
function delayedMessage(){
    alert("Hello")
}

setTimeout(delayedMessage, 5000)