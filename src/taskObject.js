// THIS COULD BE A CLASS
class Task {
  constructor(title, priority, notes, complete) {
    this.title = title;
    this.priority = priority;
    this.notes = notes;
    this.complete = complete;
  }

  // This creates a task object
  createTaskObject() {
    this.title = document.querySelector('#newTask').value;
    this.priority = document.querySelector('#tskPriority').value;
    this.notes = document.querySelector('#tskDetail').value;

    // Create New Task
    this.newTask = new Task(this.title, this.priority, this.notes);
    this.test = document.querySelector('input[type="radio"]:checked');
    myList[this.test.getAttribute('data-log')].task.push(this.newTask);
  }
// END CLASS
}
export { createTaskObject };
