import Auth from "../services/auth.js";
import location from "../services/location.js";
import loading from "../services/loading.js";
import Todos from "../services/todos.js";
import Form from "../components/form.js";

const init = async () => {
    const { ok: isLogged } = await Auth.me()

    if (!isLogged) {
        return location.login()
    } else {
        loading.stop()
    }

    function createNewTodoItem(todo) {
        // div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todoItem");

        // чекбокс
        const todoCheckbox = document.createElement("input");
        todoCheckbox.setAttribute("type", "checkbox");
        todoCheckbox.checked = todo.completed;
        todoCheckbox.onchange = async function(event) {
            await updateTodo(event, todo.id);
        }

        // текст туду
        const todoDesc = document.createElement("span");
        todoDesc.innerText = todo.description;

        // удаление кнопка
        const todoButton = document.createElement("button");
        todoButton.innerText = "Удалить";
        todoButton.addEventListener("click", async () => {
            await Todos.deleteById(todo.id);
            setTimeout(function() {
                loadTodoItems();
            }, 5000);
        })

        todoDiv.insertAdjacentElement("beforeend", todoCheckbox);
        todoDiv.insertAdjacentElement("beforeend", todoDesc);
        todoDiv.insertAdjacentElement("beforeend", todoButton);

        return todoDiv;
    }

    const addTodo = async (desc) => {
        loading.start();
        const response = await Todos.create(desc);
        loading.stop();
        if (response) {
            // setTimeout(function() {
            //     loadTodoItems();// Whatever you want to do after the wait
            // }, 5000);
            
            // todo = await Todos.getById(5);
            // doc.insertAdjacentElement("beforeend", createNewTodoItem(todo));
        } else {
            alert("Ошибка добавления");
        }
    }

    // getAll get /todo

    const loadTodoItems = async () => {
        loading.start();
        console.log("load");
        const todos = await Todos.getAll();
        console.log(todos);
        var doc = document.querySelector(".todoContainer")
        doc.innerHTML = "";
        // for ( todo : todos) {
        //     doc.insertAdjacentElement("beforeend", createNewTodoItem(todo));
        // }
        todos.forEach(todo => {
            doc.insertAdjacentElement("beforeend", createNewTodoItem(todo));
        });
        loading.stop();
    }

    // update put /todo/1 - 1 это id { description: string }
    // delete delete /todo/1 - 1 это id

    const updateTodo = async(e, todoId) => {
        loading.start();
        const value = e.target.checked;
        e.target.checked = !e.target.checked;
        const response = await Todos.updateStatusById(todoId, value);
        loading.stop();
        if (response) {
            e.target.checked = !e.target.checked;
        } else {
            alert("Ошибка запроса");
        }
    }

    // delete

    const deleteToDo = async (values) => {
        console.log(values);
        await addTodo(values.description);
        // await Todos.deleteById(value)
        setTimeout(function() {
            loadTodoItems();
        }, 5000);
    }

    //тут код

    const form = document.getElementById("formAdding");
    new Form(form, {
        "description": () => false,
    }, async (values) => {
        await deleteToDo(values);
    })

    await loadTodoItems();
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}
