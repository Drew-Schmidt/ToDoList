/* eslint-disable func-names */
/* eslint-disable no-console */
const myList = [];

// THIS COULD BE A CLASS
class List {
  constructor(name, task) {
    this.name = name;
    this.task = task;
  }


// This List For Testing Only
this.newList = new List('Main', [
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

// Create New List
this.createListObject = () => {
  const taskName = document.querySelector('#newList').value;
  const addList = new List(taskName, []);
  myList.push(addList);
};
// END CLASS
};

export {
  createListObject,
  myList,
};
