
document.getElementById("addTaskBtn").addEventListener("Click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        li.onclick = function () {
            this.remove();
        };
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.textContent = taskText;
            li.addEventListener("click", function () {
                this.remove();
            });
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText) {
                const li = document.createElement("li");
                li.textContent = taskText;
                li.addEventListener("click", function () {
                    this.remove();
                });
                taskList.appendChild(li);
                taskInput.value = "";
            }
        }
    });
});

