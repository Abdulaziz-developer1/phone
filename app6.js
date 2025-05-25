document.addEventListener("DOMContentLoaded", loadTasks);

function myFunction() {
    const taskList = document.getElementById("tasklist");
    const taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task name can't be empty!");
        return;
    }

    let tasks = getTasksFromStorage();
    
    if (tasks.length >= 5) {
        alert("You can't enter 6 or more tasks");
        return;
    }

    const newListItem = document.createElement("li");
    newListItem.innerText = taskText;
    newListItem.addEventListener("click", () => removeTask(tasks.indexOf(taskText)));

    taskList.appendChild(newListItem);

    tasks.push(taskText);
    saveTasksToStorage(tasks);

    taskInput.value = ""; // Clear input field after adding
}

function removeTask(index) {
    let tasks = getTasksFromStorage();
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        saveTasksToStorage(tasks);
        loadTasks();
    }
}

function loadTasks() {
    const taskList = document.getElementById("tasklist");
    taskList.innerHTML = "";
    let tasks = getTasksFromStorage();

    tasks.forEach((taskText, index) => {
        const newListItem = document.createElement("li");
        newListItem.innerText = taskText;
        newListItem.addEventListener("click", () => removeTask(index));
        taskList.appendChild(newListItem);
    });
}

function clearAllTasks() {
    localStorage.removeItem("tasks");
    loadTasks();
}

function getTasksFromStorage() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasksToStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
