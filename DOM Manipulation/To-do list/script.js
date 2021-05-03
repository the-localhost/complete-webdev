var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var text = input.value.toLowerCase().replace(/\b(\w)/g, x => x.toUpperCase());
	li.appendChild(document.createTextNode(text));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function cutLiAfterClick() {		// adds event listener to all li elements present
	for(var i=0; i<li.length; i++){
		var item = li[i];
		item.addEventListener("click", function(){
				this.classList.toggle("done");
		});
	}
}

cutLiAfterClick();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);