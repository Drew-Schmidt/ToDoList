/* eslint-disable no-console */
import * as dynamicElements from './DOMfunctions';

const myList = [];

// List constructor
const List = function (name, task) {
  this.name = name;
  this.task = task;
};

// // This List For Testing Only
const newList = new List('Test', [
  {
    name: 'Laundry', priority: 1, notes: 'wash and dry clothes', complete: true,
  },
  {
    name: 'Dishes', priority: 2, notes: 'wash the dishes', complete: false,
  },
  {
    name: 'Water plants', priority: 3, notes: 'water the flowers', complete: false,
  },
]);
myList.push(newList);

console.log(myList[0].task[2].complete);

// Reset data-log values
const logReset = (elementClass) => {
  const logNumber = document.querySelectorAll(elementClass);
  logNumber.forEach((item, index) => {
    item.setAttribute('data-log', index);
  });
};

const createListObject = () => {
  const taskName = document.querySelector('#newList').value;
  const addList = new List(taskName, []);
  myList.push(addList);
  logReset('.listDiv');
};

// Task constructor
const Task = function (name, priority, notes, complete) {
  this.name = name;
  this.priority = priority;
  this.notes = notes;
  this.complete = complete;
};

// This creates a task object which can be added to the list array.
const createTaskObject = () => {
  const [name, priority, notes, complete] = [
    document.querySelector('#newTask').value,
    document.querySelector('#tskPriority').value,
    document.querySelector('#tskDetail').value,
    document.querySelector('#tskComplete').value,
  ];
  // Pushes values into an assigned list
  const newTask = new Task(name, priority, notes, complete);
  const test = document.querySelector('input[type="radio"]:checked');
  myList[test.getAttribute('data-log')].task.push(newTask);
  logReset('.taskDiv');
};

// Mark task complete
const completeTask = () => {
  const completeBtn = document.querySelectorAll('.completeBtn');
  completeBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.target.style.border = 'solid .2rem blue';
    });
  });
};

// Remove task from list
const removeTask = () => {
  // remove from data array
};

// Select active list
const selectList = () => {
  const activeList = document.querySelectorAll('.listDiv');
  activeList.forEach((list) => {
    list.addEventListener('click', (e) => {
      document.querySelector('#taskWindow').textContent = '';
      const active = e.target.getAttribute('data-log');
      myList[active].task.forEach((task) => {
        // console.log(task);
        dynamicElements.addTaskElements(task.name);
        logReset('.taskDiv');
      });
    });
  });
};

export {
  createListObject,
  createTaskObject,
  removeTask,
  completeTask,
  logReset,
  myList,
  selectList,
};
