
var resetInput = function resetInput() {

					var inputValue = document.getElementById('todoInput').value;

					if(inputValue) {
						// to reset the text box
						document.getElementById('todoInput').value = '';
					}

				}

document.getElementById('addTaskButton').addEventListener('click' ,resetInput )








/*

var resetInput = function(){

			var inputValue = document.getElementById('todoInput').value;

			if(inputValue) {
				todoList(inputValue);

				// to reset the text box
				document.getElementById('todoInput').value = '';
			}

};

document.getElementById('addItem').addEventListener('click' , resetInput);

*/