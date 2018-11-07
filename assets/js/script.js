var listElement = document.querySelector('.tasks');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
	listElement.innerHTML = '';

	for (todo of todos) {
		var taskDiv = document.createElement('div');
		taskDiv.setAttribute('class', 'task');

		var ulDiv = document.createElement('ul');
		ulDiv.setAttribute('class', 'task-nome');

		var liElement = document.createElement('li');
		var liText = document.createTextNode(todo);

		liElement.appendChild(liText);

		listElement.appendChild(taskDiv);
		taskDiv.appendChild(ulDiv);
		ulDiv.appendChild(liElement);

		var pos = todos.indexOf(todo);

		var linkElement = document.createElement('a');
		var linkText = document.createTextNode('Remove');

		linkElement.setAttribute('href', '#');
		linkElement.appendChild(linkText);

		liElement.appendChild(linkElement);

		linkElement.setAttribute('onclick', 'removeTodo(' + pos + ')')
	}
}

renderTodos();

function addTodo() {
	var liText = prompt('Enter a task');
	if (liText == '') {
		alert('You need to type something.');
	} else {
		todos.push(liText); 
		renderTodos();
		saveToStorage();
	}
}

function removeTodo(pos) {
	todos.splice(pos, 1);
	renderTodos();
	saveToStorage();
}

function saveToStorage() {
	localStorage.setItem('list_todos', JSON.stringify(todos));
}