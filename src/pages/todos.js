import Auth from "../services/auth.js";
import location from "../services/location.js";
import loading from "../services/loading.js";
import Todos from "../services/todos.js";
import Form from "../components/form.js";

const init = async () => {
    // const { ok: isLogged } = await Auth.me()
    //
    // if (!isLogged) {
    //     return location.login()
    // } else {
    //     loading.stop()
    // }

    // create POST /todo { description: string }

    function createNewTodoItem(todo) {
        // div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todoItem");
        console.log("dfg")

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
            await loadTodoItems();
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
            await loadTodoItems();
        } else {
            alert("Ошибка добавления");
        }
    }

    // getAll get /todo

    const loadTodoItems = async () => {
        loading.start();
        console.log("loadTodoItems do")
        const todos = await Todos.getAll();
        var doc = document.querySelector(".todoContainer")
        doc.innerHTML = "";
        todos.forEach(todo => {
            doc.insertAdjacentElement("beforeend", createNewTodoItem(todo));
        });
        loading.stop();
    }

    // update put /todo/1 - 1 это id { description: string }

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

    // const deleteToDo = async (values) => {
    //     await addTodo(values.description);
    //     await loadTodoItems();
    // }

    //тут код

    const form = document.getElementById("formAdding");
    // new Form(form, {
    //     "description": () => false,
    // }, async (values) => {
    //     await deleteToDo(values);
    // })

    await loadTodoItems();

    let btn1 = document.getElementById('btn1');
    let desc = document.getElementById('input1').value.toString();
    btn1.onclick = addTodo(desc);


}

// if (document.readyState === 'loading') {
//     document.addEventListener("DOMContentLoaded", init)
// } else {
//     init()
// }
