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

		var removeElement = document.createElement('a');
		var removeText = document.createTextNode('Remove');

		removeElement.setAttribute('href', '#');
		removeElement.setAttribute('class', 'remove-btn')
		removeElement.appendChild(removeText);

		liElement.appendChild(removeElement);

		removeElement.setAttribute('onclick', 'removeTodo(' + pos + ')')

		var editElement = document.createElement('a');
		var editText = document.createTextNode('Edit')

		editElement.setAttribute('href', '#');
		editElement.setAttribute('class', 'edit-btn')
		editElement.appendChild(editText);

		liElement.appendChild(editElement);

		editElement.setAttribute('onclick', 'editTodo(' + pos + ')')
	}
}

renderTodos();

function addTodo() {
	var liText = prompt('Enter a task');
	if (liText == '' || liText == null) {
		alert('You need to type something.');
	} else {
		todos.push(liText); 
		renderTodos();
		saveToStorage();
	}
}

function editTodo(pos) {
	var liText = prompt('Enter the new value');
	if (liText == '' || liText == null) {
		alert('You need to type something.');
	} else {
		todos[pos] = liText;
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