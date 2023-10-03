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
var span = document.createElement("SPAN");
  var txt = document.createElement("button");
  span.className = "close";
  span.appendChild(txt);
listItems.appendChild(newElement);
listItems.appendChild(span); 


// var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createElement("button");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist.appendChild(span);
// }
 }
)

txt.addEventListener("click", () => {
    var a = document.getElementById("myList");
    var close = document.getElementsByClassName("txt")
    var item = document.getElementById(txt.value);
    a.removeChild(item);
    //close.closest('li').remove(); 
})
// (span).closest('li').remove()

// var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("button");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }