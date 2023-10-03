let btn = document.querySelector("#summitBtn");
let inputField = document.getElementById("mainInput");
let userInput = "";
let listItems = document.querySelector("#myList");
// let newElement = document.createElement('li');
// let newContent = document.createTextNode(userInput);



inputField.addEventListener("input", (obj) => {userInput = obj.target.value})

btn.addEventListener("click", () => {
    let newElement = document.createElement('li');
    let newContent = document.createTextNode(userInput);
    listItems.appendChild(newContent);
    +"/n"
})


