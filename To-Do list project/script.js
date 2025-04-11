const form = document.querySelector("form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("tasks-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.length) {
    let newTask = document.createElement("li");
    newTask.innerHTML =
      '<input type="checkbox" id="task-1"> <label for="task-1">' +
      input.value +
      '</label><button class="delete-btn"><i class="fa fa-close"></i></button>';
    taskList.appendChild(newTask);
    saveTasks()
    input.value = "";
    let deleteButton = newTask.querySelector(".delete-btn");
    deleteButton.addEventListener("click", (e) => {
      newTask.remove();
    });
    const checkBox = newTask.querySelector('input[type="checkbox"]');
    checkBox.addEventListener("change", (e) => {
      if (e.target.checked) {
        newTask.classList.add("completed");
      } else {
        newTask.classList.remove("completed");
      }
    });
    let taskLabel = newTask.querySelector("label");
    makeLabelEditable(taskLabel, newTask);
  }
  
});

function makeLabelEditable(taskLabel, newTask) {
  taskLabel.addEventListener("click", () => {
    let editBox = document.createElement("input");
    editBox.value = taskLabel.textContent;
    newTask.replaceChild(editBox, taskLabel);

    editBox.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        let newLabel = document.createElement("label");
        newLabel.textContent = editBox.value;
        newTask.replaceChild(newLabel, editBox);
        makeLabelEditable(newLabel, newTask);
      }
    });
  });
}


function saveTasks() {
    let list = document.querySelectorAll('li')
    let tasks = []
    for (i = 0; i < list.length; i++) {
        const li = list[i]
        const label = li.querySelector('label')
        const checkBox = li.querySelector("input[type='checkbox")
        const taskText = label.textContent
        const isCompleted = checkBox.checked
        const taskObject = {
            text: taskText,
            completed: isCompleted
        }
        tasks.push(taskObject)
    } localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    localStorage.getItem("tasks")
    let savedTasks = JSON.parse(localStorage.getItem("tasks"));

}


let savedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log(savedTasks);
