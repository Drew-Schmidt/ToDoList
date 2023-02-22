import * as controlFunction from './Controllers';

// Add Task Elements
const addTaskElements = (task) => {
  const dynTaskLine = document.createElement('div');
  dynTaskLine.classList.add('taskDiv');
  // Create text
  const dynTaskInput = document.createElement('input');
  dynTaskInput.setAttribute('type', 'text');
  dynTaskInput.value = task;
  // Create done button
  const dynTaskDone = document.createElement('button');
  dynTaskDone.classList.add('completeBtn');
  dynTaskDone.innerText = 'Complete';
  // create del button
  const dynTaskDelete = document.createElement('button');
  dynTaskDelete.classList.add('deleteBtn');
  dynTaskDelete.innerText = 'Delete';
  // Event listener is applied prior to append call
  dynTaskDelete.addEventListener('click', (event) => {
    event.target.parentNode.remove();

    // Get Task ID and List ID
    const taskID = event.target.parentNode.getAttribute('data-log');
    const listID = document.querySelector('input[type="radio"]:checked')
      .getAttribute('data-log');

    // Delete array item by task ID
    controlFunction.myList[listID].task.splice(Number(taskID), 1);
    // The result is a single entry into the log
  });
  // Append all
  document.querySelector('#taskWindow').appendChild(dynTaskLine);
  dynTaskLine.appendChild(dynTaskInput);
  dynTaskLine.appendChild(dynTaskDone);
  dynTaskLine.appendChild(dynTaskDelete);
};

// Add List Elements
const addList = (list) => {
  // Create List block
  const dynListLine = document.createElement('input');
  dynListLine.classList.add('listDiv');
  dynListLine.setAttribute('type', 'radio');
  dynListLine.setAttribute('name', 'activeList');

  // Add text
  const dynListInput = document.createElement('label');
  dynListInput.setAttribute('for', list.value);
  dynListInput.innerText = list.value;

  document.querySelector('#listWindow').appendChild(dynListLine);
  document.querySelector('#listWindow').appendChild(dynListInput);
};

export { addTaskElements, addList };
