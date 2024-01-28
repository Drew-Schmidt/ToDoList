// eslint-disable-next-line no-unused-vars
import _, { forEach, sortedLastIndexOf } from 'lodash';
import * as DOM from './ClientApp/dynamicElements';
import * as tasks from './Infrastructure/tasks';
import * as projects from './Infrastructure/projects';

// identify button and wait for list to be submitted
const submitTask = document.querySelector('#submitTask')
const submitList = document.querySelector('#submitList')


submitList.addEventListener('click', () => {
  createListObject();
  });

// Create List
const createListObject = () => {
  const projName = document.querySelector('#newList').value
  projects.addNewProj(projName);
  console.log(projects.projDb)
};

submitTask.addEventListener('click', () => {
  createTaskObject();
  });

// Create Task
const createTaskObject = () => {
  const [task, info, priority, dueDate] = [
    //document.querySelector('#tskList').value,
    document.querySelector('#newTask').value,
    document.querySelector('#tskDetail').value,
    document.querySelector('#tskPriority').value,
    document.querySelector('#tskDue').value
  ];

  // (list, task, info, priority, status, dueDate)
  tasks.addNewTask(
    "Lisr name", //Not functional
    task,
    info,
    priority,
    false, // defaults to incomplete
    dueDate
  );
  console.log(tasks.taskDb);
} 

