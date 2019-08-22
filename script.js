// Checkpoints
// 1. Validate all non possible cases
// 2. Create a function adds list after the onclick event
// 3. We will need to reset the input text field adding task
var ToArr = [];


function todoList(){
	var addedItem = document.getElementById("todoInput").value;
	console.log(addedItem);
	var text = document.createTextNode(addedItem)
	// console.log(text);
	var newItem = document.createElement("li");
	console.log(newItem);
	console.log(newItem.appendChild(text));
	document.getElementById("todoList").appendChild(newItem)
}


function removeTask(){
	var ul = document.getElementById("todoList");
  var candidate = document.getElementById("todoInput");
  var item = document.getElementById(candidate.value);
  ul.removeChild(item);
}




function resetInput() {

	var inputValue = document.getElementById('todoInput').value;

	if(inputValue) {
		// to reset the text box
		document.getElementById('todoInput').value = '';
			}

		}
var resetInput = resetInput;

document.getElementById('addTaskButton').addEventListener('click' ,resetInput )