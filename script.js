const taskInput = document.getElementById("taskInput");
const addTaskForm = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Outer wrapper
  const taskItemOtr = document.createElement("div");
  taskItemOtr.className =
    "flex items-center justify-between mb-3";

  // Inner wrapper
  const taskItemInr = document.createElement("div");
  taskItemInr.className =
    "flex items-center gap-3 cursor-pointer";

  // Circle (checkbox)
  const taskItemSpan = document.createElement("span");
  taskItemSpan.className =
    "w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center";

  // Task text
  const taskItemP = document.createElement("p");
  taskItemP.textContent = taskText;
  taskItemP.className = "text-lg";

  // Toggle complete
  taskItemInr.addEventListener("click", () => {
    taskItemP.classList.toggle("line-through");
    taskItemP.classList.toggle("text-gray-400");

    taskItemSpan.classList.toggle("bg-themeColor");
    taskItemSpan.classList.toggle("border-themeColor");
  });

  // Delete button
  const taskItemButton = document.createElement("button");
  taskItemButton.textContent = "✕";
  taskItemButton.className =
    "text-red-500 font-bold text-xl hover:scale-110 transition";

  taskItemButton.addEventListener("click", () => {
    taskItemOtr.remove();
  });

  // Build DOM
  taskItemInr.append(taskItemSpan, taskItemP);
  taskItemOtr.append(taskItemInr, taskItemButton);
  taskList.appendChild(taskItemOtr);

  taskInput.value = "";
});
