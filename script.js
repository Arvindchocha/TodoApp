const taskInput = document.getElementById("taskInput");
const addTaskForm = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos(){
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  taskList.innerHTML = "";

  todos.map((todo,index)=>{
    const taskItemOtr = document.createElement("div");
    taskItemOtr.className =
      "flex items-center justify-between mb-3";

       const taskItemInr = document.createElement("div");
    taskItemInr.className =
      "flex items-center gap-3 cursor-pointer";

      const taskItemSpan = document.createElement("span");
    taskItemSpan.className =
      "w-6 h-6 rounded-full border-2 flex items-center justify-center";

        const taskItemP = document.createElement("p");
    taskItemP.textContent = todo.text;
    // reset styles
taskItemP.className = "text-lg";
taskItemSpan.className =
  "w-6 h-6 rounded-full border-2 flex items-center justify-center";
taskItemSpan.innerHTML = "";

// apply completed state
if (todo.completed) {
  taskItemP.classList.add("line-through", "text-gray-500");
  taskItemSpan.innerHTML = "✔";
  taskItemSpan.classList.add(
    "border-themeColor",
    "bg-themeColor",
    "text-white",
    "font-bold",
    "text-xs"
  );
} else {
  taskItemSpan.classList.add("border-gray-500");
}


    taskItemSpan.addEventListener("click",()=>{
      todos[index].completed = !todos[index].completed;
      saveTodos();
      renderTodos();
    });

    

 const taskItemButton = document.createElement("button");
    taskItemButton.textContent = "✕";
    taskItemButton.className =
      "text-red-500 font-bold text-xl hover:scale-110 transition";


    taskItemButton.addEventListener("click",()=>{
      todos.splice(index,1);
      saveTodos();
      renderTodos();
    });

    taskItemInr.appendChild(taskItemSpan);
    taskItemInr.appendChild(taskItemP);
    taskItemOtr.appendChild(taskItemInr);
    taskItemOtr.appendChild(taskItemButton);

    taskList.appendChild(taskItemOtr);

  })
}

addTaskForm.addEventListener("submit",(e)=>{
  e.preventDefault();

  const taskText = taskInput.value.trim();
 if (taskText === "") {
    alert("Please enter a task.");
    return;
  }


  todos.push({ text: taskText, completed: false });
  saveTodos();
  renderTodos();
  taskInput.value = "";
})

renderTodos();