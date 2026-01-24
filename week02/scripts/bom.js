const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // <-- "blank"

const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;  // lee
deleteButton.textContent = '❌';

li.append(deleteButton); // el botón va dentro del li
list.append(li);         // li va dentro del ul