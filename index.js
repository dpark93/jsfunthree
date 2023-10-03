// var btn = document.querySelector("#summitBtn");
// var inputField = document.getElementById("mainInput");
// var userInput = "";
// inputField.addEventListener("input", (obj) => {userInput = obj.target.value})



// function addNewElement() {
//     var listItems = document.querySelector("#myList");
//     var newElement = document.createElement('li');
//     var newContent = document.createTextNode(userInput);
//     newElement.appendChild(newContent);
//     listItems.appendChild(newElement);

//     var span = document.createElement("SPAN")    
//     var txt = document.createElement("button");
//     span.className = "close";
    
//     span.appendChild(txt);
//     listItems.appendChild(span); 

//      var close = document.getElementsByClassName("close");
//      for (i = 0; i < close.length; i++) {
//      close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }



function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("mainInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myList").appendChild(li);
  
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u2613");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
  
  var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

