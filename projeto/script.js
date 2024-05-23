window.onload = async () => {

    // O teu código aqui...
    const listsContainer = document.querySelector("#lists-container");
    const todoHeader = document.querySelector("todo-header");
    document.querySelector("#tasks").onclick = () => {
        listsContainer.style.transform = "translateX(-100%)";
        todoHeader.state = "items";
    }
    // document.querySelector("#items").onclick = () => {
    //     listsContainer.style.transform = "translateX(0)";
    // }

    todoHeader.addEventListener("clicked", () => {
        listsContainer.style.transform = "translateX(0)";
        todoHeader.state = "tasks";
    })
}
