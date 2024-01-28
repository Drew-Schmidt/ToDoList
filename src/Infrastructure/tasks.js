/* eslint-disable func-names */
/* eslint-disable no-console */
import uniqid from 'uniqid';

let taskDb = [];

//Task object
class Task {
  constructor(id, projId, task, info, priority, status, dueDate) {
    this.id = id
    this.projId = projId
    this.task = task;
    this.info = info;
    this.priority = priority;
    this.status = status;
    this.dueDate = dueDate;
  };
};

//Create new task
const addNewTask = (projId, task, info, priority, status, dueDate) => {
  const newTask = new Task(uniqid(),projId, task, info, priority, status, dueDate);
  taskDb.push(newTask);
};

//update task info
const updateTaskInfo = (taskId, newVal) => {
  TaskDb.filter((task) => {
    if(task.task === taskId);
    task.info = newVal;
  });
};

  //update task status
const setTaskStatus = (taskId) => {
  const index = taskDb.findIndex(task => task.id === taskId);
    
  if (index !== -1) {
    taskDb[index].status === true ? taskDb[index].status = false : taskDb[index].status = true ;
  };
};
  
//Delete task 
const deleteTask = (taskId) => {
  const index = taskDb.findIndex(task => task.id === taskId);
  
  if (index !== -1) {
    taskDb.splice(index, 1);
  };
};


export {
  deleteTask,
  setTaskStatus,
  updateTaskInfo,
  addNewTask,
  taskDb
}