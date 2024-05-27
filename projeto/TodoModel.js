export default class TodoModel {
    #tasks = [
        {
            title: "Task 1",
            items: [
                {
                    title: "Item 1",
                    checked: "false"
                },
                {
                    title: "Item 2",
                    checked: "false"
                },
                {
                    title: "Item 3",
                    checked: "false"
                }
            ]
        }
    ];

    constructor() {

        if(!localStorage.getItem("todos")){ 
            localStorage.setItem("todos", JSON.stringify(this.#tasks));
        }
    }

    /** TASKS */
    addTask(task) {
        // this.#tasks.push(task);
        this.#tasks.push({title: task, items:[]});
        this.#updateLocalStorage();
    }
    deleteTask(index) {
        this.#tasks.splice(index, 1);
        this.#updateLocalStorage();
    }
    getTasks() {
        
        return JSON.parse(localStorage.getItem("todos"));
    }

    /** ITEMS */
    addItem(taskIndex, item) {
        // this.#tasks[taskIndex].items.push(item);
        this.#tasks[taskIndex].items.push({title:item, checked:"false"});
        this.#updateLocalStorage();
    }
    deleteItem(taskIndex, itemIndex) {
        this.#tasks[taskIndex].items.splice(itemIndex, 1);
        console.log("deletes item", this.#tasks[taskIndex].items);
        this.#updateLocalStorage();
    }
    updateItem(taskIndex, itemIndex, val) {

        console.log("taskIndex", taskIndex);
        console.log("itemIndex", itemIndex);
        console.log(this.#tasks[taskIndex].items);
        this.#tasks[taskIndex].items[itemIndex].checked = val;
        this.#updateLocalStorage();
    }
    getItems(taskIndex) {
        return this.#tasks[taskIndex].items;
    }

    #updateLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.#tasks));
    }
}