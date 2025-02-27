let todo_input = document.getElementById('todo_input');
let todos = document.getElementById('todos');
let counter = 1;

document.getElementById('makenote').addEventListener('click', () => {
    if (todo_input.value.trim() === '') {
        alert("Please enter a task!");
        return; // Prevent adding empty tasks
    }

    // Create a new label for each task
    let lbl = document.createElement('label');
    lbl.id = `l }`;
    lbl.innerHTML = `
        <input type="checkbox" id="checkbox${counter}">
        <span id="span${counter}">${todo_input.value}</span>
    `;

    // Add a line separator (optional)
    let hr = document.createElement('hr');

    // Append elements to the list
    todos.appendChild(lbl);
    todos.appendChild(hr);

    // Clear input field
    todo_input.value = '';

    counter++;
});
