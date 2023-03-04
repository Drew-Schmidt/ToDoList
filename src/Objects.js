/* eslint-disable func-names */
/* eslint-disable no-console */
const myList = [];

// THIS COULD BE A CLASS
const List = function (name, task) {
  this.name = name;
  this.task = task;
};

// This List For Testing Only
const newList = new List('Main', [
  {
    name: 'Laundry', priority: 'Low', notes: 'wash and dry clothes', complete: true,
  },
  {
    name: 'Dishes', priority: 'High', notes: 'wash the dishes', complete: false,
  },
  {
    name: 'Water plants', priority: 'Low', notes: 'water the flowers', complete: false,
  },
]);
myList.push(newList);

// Reset data-log values
const logReset = (elementClass) => {
  const logNumber = document.querySelectorAll(elementClass);
  logNumber.forEach((item, index) => {
    item.setAttribute('data-log', index);
  });
};

// Create New List
const createListObject = () => {
  const taskName = document.querySelector('#newList').value;
  const addList = new List(taskName, []);
  myList.push(addList);
  logReset('.listDiv');
};
// END CLASS

// THIS COULD BE A CLASS
const Task = function (name, priority, notes, complete) {
  this.name = name;
  this.priority = priority;
  this.notes = notes;
  this.complete = complete;
};

// This creates a task object
const createTaskObject = () => {
  const [name, priority, notes] = [

    document.querySelector('#newTask').value,
    document.querySelector('#tskPriority').value,
    document.querySelector('#tskDetail').value,

  ];

  // Create New Task
  const newTask = new Task(name, priority, notes);
  const test = document.querySelector('input[type="radio"]:checked');
  myList[test.getAttribute('data-log')].task.push(newTask);
  logReset('.taskDiv');
};
// END CLASS

export {
  createListObject,
  createTaskObject,
  logReset,
  myList,
};
