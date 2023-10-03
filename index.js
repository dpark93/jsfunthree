var btn = document.querySelector("#summitBtn");
var inputField = document.getElementById("mainInput");
var userInput = "";
// let listItems = document.querySelector("#myList");
// let newElement = document.createElement('li');
// let newContent = document.createTextNode(userInput);
// newElement.appendChild(newContent);


inputField.addEventListener("input", (obj) => {userInput = obj.target.value})

btn.addEventListener("click", () => {
var listItems = document.querySelector("#myList");
var newElement = document.createElement('li');
var newContent = document.createTextNode(userInput);
newElement.appendChild(newContent);
listItems.appendChild(newElement)
})


