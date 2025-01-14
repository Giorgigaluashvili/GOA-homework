const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const li = document.createElement("li");

        li.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskInput.value = "";
    }
}

function clearAllTasks() {
    taskList.innerHTML = ""; 
}

addTaskBtn.addEventListener("click", addTask);

clearAllBtn.addEventListener("click", clearAllTasks);

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});