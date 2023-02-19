/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import _, { forEach } from 'lodash';
import * as dynamicElements from './DOMfunctions';
import * as controlFunction from './Controllers';

// Query static buttons
const submitList = document.querySelector('#submitList');
const submitTask = document.querySelector('#submitTask');
const addList = document.querySelector('#newList');
const addTask = document.querySelector('#newTask');

// Create New list/project
submitList.addEventListener('click', () => {
  // Create elements from form value
  dynamicElements.addList(addList);
  // Save form data to myList array
  controlFunction.createListObject();
});

// Create New task
submitTask.addEventListener('click', () => {
  // Create elements from form values
  dynamicElements.addTaskElements(addTask.value);
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
  list.task.forEach((task) => {
    // Create elements from list objects
    dynamicElements.addTaskElements(task.notes);
    // Mark task Completed
    controlFunction.completeTask();
    // Remove task
    controlFunction.removeTask();
  });
});
