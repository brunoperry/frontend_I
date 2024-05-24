import TodoModel from "./TodoModel.js";

window.onload = async () => {

    const model = new TodoModel();
    console.log(model.getTasks());

    // O teu código aqui...
    const listsContainer = document.querySelector("#lists-container");
    const todoHeader = document.querySelector("todo-header");
    todoHeader.addEventListener("clicked", () => {
        listsContainer.style.transform = "translateX(0)";
        todoHeader.state = "tasks";
    });

    
    const buildTasksList = (tasks) => {
        const tasksList = document.querySelector("#tasks");
        tasksList.innerHTML = "";

        tasks.forEach(task => {
            const li = document.createElement("li");
            const taskItem = new TaskItem();
            taskItem.addEventListener("clicked", () => {
                console.log("item clicked");
                listsContainer.style.transform = "translateX(-100%)";
                todoHeader.state = "items";
                todoHeader.taskName = task.title;
            });
            taskItem.addEventListener("delete", () => {
                console.log("delete item");
            });
            taskItem.title = task.title;

            li.append(taskItem);
            tasksList.append(li);
        });

    }

    const buildItemsList = () => {

    }

    buildTasksList(model.getTasks());
}
