const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");


let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoItem(todo) {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    const span = document.createElement("span");
    span.textContent = todo.text;

    checkbox.addEventListener("change", () => {
        todo.done = checkbox.checked;

        li.classList.toggle("done", todo.done);


        renderTodos();
        saveTodos();
    });

    li.appendChild(checkbox);
    li.appendChild(span);

    return li;
}

function renderTodos(filter = "all") {
    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (filter === "active") {
        filteredTodos = todos.filter(t => !t.done);
    } else if (filter === "done") {
        filteredTodos = todos.filter(t => t.done);
    }


    filteredTodos.sort((a, b) => a.done - b.done);

    filteredTodos.forEach(todo => {
        todoList.appendChild(createTodoItem(todo));
    });
}

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {

        const newTodo = {
            text: input.value,
            done: false
        };

        todos.push(newTodo);
        saveTodos();
        renderTodos();

        input.value = "";
    }
});


document.querySelectorAll(".filters button").forEach(btn => {
    btn.addEventListener("click", () => {
        renderTodos(btn.dataset.filter);
    });
});


renderTodos();