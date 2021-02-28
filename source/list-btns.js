/* global Task */
/* eslint no-undef: "error" */
const entName = document.getElementById("task-name");
entName.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});

const entPomo = document.getElementById("pomo-num");
entPomo.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});

const addButton = document.getElementById("add");
addButton.addEventListener("click",function(e){
  e.preventDefault();
  addTask();
});

/**
 * Add a new task into the list.
 */
function addTask() {
  const noTask = document.getElementById("no-task");
  const tasks = document.getElementById("tasks");
  const taskName = document.getElementById("task-name");
  const pomoNum = document.getElementById("pomo-num");

  noTask.style.display = "none";

  const newTask = taskName.value;
  const newPomo = pomoNum.value;
  if (newPomo > 4)
  const task = {
    taskName: newTask,
    pomoNum: newPomo,
  };
  
  tasks.appendChild(new Task(task));
}

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click",function(){
  clearList();
});
/**
 * Clear the current task list.
 */
function clearList() {
  const taskList = document.getElementById("task-list");
  const noTask = document.getElementById("no-task");
  noTask.style.display = "inline";
  while (taskList.children.length > 2) {
    taskList.removeChild(taskList.children[2]);
  }
}