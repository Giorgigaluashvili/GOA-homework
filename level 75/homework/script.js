const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const newTask = document.createElement("li");  
    newTask.textContent = taskText;  

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    newTask.appendChild(deleteBtn); 
    newTask.appendChild(editBtn); 

    taskList.appendChild(newTask);

    taskInput.value = "";  
}

addTaskBtn.addEventListener("click", addTask);

function deleteTask(event) {
    if (event.target.classList.contains("delete-btn")) {
        const taskItem = event.target.parentElement; 
        taskList.removeChild(taskItem);
    }
}

taskList.addEventListener("click", deleteTask);

function editTask(event) {
    if (event.target.classList.contains("edit-btn")) {
        const taskItem = event.target.parentElement;  
        const taskText = taskItem.firstChild.textContent;  

        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = taskText;
        taskItem.firstChild.textContent = "";  
        taskItem.insertBefore(editInput, taskItem.firstChild); 

        event.target.textContent = "Save";
        event.target.classList.add("save-btn");
        event.target.classList.remove("edit-btn");
    }
}

function saveTask(event) {
    if (event.target.classList.contains("save-btn")) {
        const taskItem = event.target.parentElement;  
        const newTaskText = taskItem.firstChild.value.trim(); 

        if (newTaskText === "") {
            alert("Please enter a valid task.");
            return;
        }

        taskItem.firstChild.remove(); 
        taskItem.firstChild.textContent = newTaskText;  

        event.target.textContent = "Edit";
        event.target.classList.add("edit-btn");
        event.target.classList.remove("save-btn");
    }
}

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("edit-btn")) {
        editTask(event);
    } else if (event.target.classList.contains("save-btn")) {
        saveTask(event);
    }
});


