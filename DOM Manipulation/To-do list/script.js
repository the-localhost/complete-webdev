var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var btn = document.querySelectorAll(".li-del");

function inputLength() {
	return input.value.length;
}

function createButtonElementInDiv(div) {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("X"));
	btn.setAttribute("class", "li-del");
	div.appendChild(btn);
	btn.addEventListener("click", function(){
		this.parentElement.parentElement.removeChild(this.parentElement);
	});
}

function createListElementInDiv(div) {
	var li = document.createElement("li");
	var text = input.value.toLowerCase().replace(/\b(\w)/g, x => x.toUpperCase());
	li.appendChild(document.createTextNode(text));
	div.appendChild(li);
	input.value = "";
	li.addEventListener("click", function(){
		this.classList.toggle("done");
	});
}

function createUlDiv() {
	var div = document.createElement("div");
	div.setAttribute("class", "entry");
	createButtonElementInDiv(div);
	createListElementInDiv(div);
	ul.append(div);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createUlDiv();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createUlDiv();
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

function deleteTaskAfterClick() {
	for(var i=0; i<btn.length; i++){
		var item = btn[i];
		item.addEventListener("click", function(){
				this.parentElement.parentElement.removeChild(this.parentElement);
		});
	}
}

cutLiAfterClick();

deleteTaskAfterClick();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);