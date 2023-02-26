/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import _, { forEach } from 'lodash';
import * as dynamicElements from './DOMfunctions';
import * as controlFunction from './Controllers';

// Query
const submitList = document.querySelector('#submitList');
const submitTask = document.querySelector('#submitTask');
const addList = document.querySelector('#newList');
const addTask = document.querySelector('#newTask');
const addPriority = document.querySelector('#tskPriority');
const addDetail = document.querySelector('#tskDetail');

// Create New list/project
submitList.addEventListener('click', () => {
  // Create elements from form value
  dynamicElements.addList(addList.value);
  // Save form data to myList array
  controlFunction.createListObject();
  // Select active list
  controlFunction.selectList();
});

// Functional Test of dynamic task creation
submitTask.addEventListener('click', () => {
  // Create elements from form values
  dynamicElements.addTaskElements(addTask.value, addPriority.value, addDetail.value);
  // Save form data to list object
  controlFunction.createTaskObject();
  // Mark task completed
  controlFunction.completeTask();
  // Remove task
  controlFunction.removeTask();
  // Edit task
});

// Test task population from lists within myLists
// Double forEach() for 'all to-do items' at window load
controlFunction.myList.forEach((list) => {
  console.log(list.name);
  dynamicElements.addList(list.name);
  list.task.forEach((task) => {
    // Create elements from list objects
    dynamicElements.addTaskElements(
      task.name,
      task.priority,
      task.notes,
      task.complete,
    );
    // Mark task Completed
    controlFunction.completeTask();
    // Remove task
    controlFunction.removeTask();
  });
});
