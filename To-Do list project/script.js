const form = document.querySelector("form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("tasks-list");

form.addEventListener("submit", (e) => {
  if (input.value.length) {
    let newTask = document.createElement("li");
    newTask.innerHTML =
      '<input type="checkbox" id="task-1"> <label for="task-1">' +
      input.value +
      '</label><button class="delete-btn"><i class="fa fa-close"></i></button>';
    taskList.appendChild(newTask);
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
  }
  e.preventDefault();
});
