// eslint-disable-next-line no-unused-vars
import _, { forEach } from 'lodash';
import * as dynElements from './DynElements';
import * as objects from './Objects';

// Work into other files as able
const submitList = document.querySelector('#submitList');
const submitTask = document.querySelector('#submitTask');
const newList = document.querySelector('#newList');
const newTask = document.querySelector('#newTask');
const priority = document.querySelector('#tskPriority');
const detail = document.querySelector('#tskDetail');

// Create New list/project
submitList.addEventListener('click', () => {
  dynElements.list(newList.value);
  dynElements.selectList();
  objects.createListObject();
});

// Functional Test of dynamic task creation
submitTask.addEventListener('click', () => {
  dynElements.addTaskElements(newTask.value, priority.value, detail.value);
  objects.createTaskObject();
});

// This belongs in a different file
objects.myList.forEach((list) => {
  dynElements.list(list.name);
  list.task.forEach((task) => {
    // Create elements from list objects
    dynElements.addTaskElements(
      task.name,
      task.priority,
      task.notes,
      task.complete,
    );
    objects.logReset('.taskDiv');
  });
});
