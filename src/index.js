// eslint-disable-next-line no-unused-vars
import _, { forEach } from 'lodash';
import * as dynElements from './DynElements';
import * as objects from './listObject';

// Work into other files as able
const submitList = document.querySelector('#submitList');
const submitTask = document.querySelector('#submitTask');
const newList = document.querySelector('#newList');
const newTask = document.querySelector('#newTask');
const priority = document.querySelector('#tskPriority');
const detail = document.querySelector('#tskDetail');

// Create New list/project
submitList.addEventListener('click', () => {
  if (!newList.value) {
    // Add Notification that form is empty
    console.log('yikes');
  } else {
    dynElements.addList(newList.value);
    dynElements.selectList();
    objects.createListObject();
  }
});

// Create New Task
submitTask.addEventListener('click', () => {
  if (!newTask.value || !detail.value) {
    // Add Notification that form is empty
    console.log('yikes again');
  } else {
    dynElements.addTaskElements(newTask.value, priority.value, detail.value);
    dynElements.logReset('.taskDiv');
    objects.createTaskObject();
  }
});

// This belongs in a different file
objects.myList.forEach((list) => {
  dynElements.addList(list.name);
  list.task.forEach((task) => {
    // Create elements from list objects
    dynElements.addTaskElements(
      task.name,
      task.priority,
      task.notes,
      task.complete,
    );
    dynElements.logReset('.taskDiv');
  });
});
