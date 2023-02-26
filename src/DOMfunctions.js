import * as controlFunction from './Controllers';

// Add Task Elements
const addTaskElements = (task, priority, note, complete) => {
  const dynTaskLine = document.createElement('div');
  dynTaskLine.classList.add('taskDiv');

  // Check if task is complete
  if (priority === 'High') {
    dynTaskLine.style.border = 'solid .15rem rgb(252,141,93)';
  }
  if (complete === true) {
    console.log('this is true');
    dynTaskLine.style.backgroundColor = '#27D582';
  }

  // Create text
  const dynTaskInput = document.createElement('H4');
  dynTaskInput.textContent = `Task: ${task} | Priority: ${priority}`;

  // Create Button Container
  const btnBox = document.createElement('div');
  btnBox.classList.add('btnBox');

  // Create done button
  const dynTaskDone = document.createElement('button');
  dynTaskDone.classList.add('completeBtn');
  dynTaskDone.innerText = 'Complete';
  dynTaskDone.addEventListener('click', (e) => {
    e.target.parentNode.parentNode.style.backgroundColor = '#27D582';
    const taskID = e.target.parentNode.parentNode.getAttribute('data-log');
    const listID = document.querySelector('input[type="radio"]:checked')
      .getAttribute('data-log');

    // Delete array item by task ID
    controlFunction.myList[listID].task[taskID].complete = true;
  });

  // create del button
  const dynTaskDelete = document.createElement('button');
  dynTaskDelete.classList.add('deleteBtn');
  dynTaskDelete.innerText = 'Delete';

  // Event listener is applied prior to append call
  dynTaskDelete.addEventListener('click', (e) => {
    e.target.parentNode.parentNode.remove();

    // Get Task ID and List ID
    const taskID = e.target.parentNode.parentNode.getAttribute('data-log');
    const listID = document.querySelector('input[type="radio"]:checked')
      .getAttribute('data-log');

    // Delete array item by task ID
    controlFunction.myList[listID].task.splice(Number(taskID), 1);
  });
  // Append all
  document.querySelector('#taskWindow').appendChild(dynTaskLine);
  dynTaskLine.appendChild(dynTaskInput);
  dynTaskLine.appendChild(btnBox);
  btnBox.appendChild(dynTaskDone);
  btnBox.appendChild(dynTaskDelete);
};

// Add List Elements
const addList = (list) => {
  const listDiv = document.createElement('div');
  listDiv.classList.add('testBox');
  // Create List block
  const dynListLine = document.createElement('input');
  dynListLine.classList.add('listDiv');
  dynListLine.setAttribute('type', 'radio');
  dynListLine.setAttribute('name', 'activeList');
  dynListLine.setAttribute('checked', true);

  // Add text
  const dynListInput = document.createElement('label');
  dynListInput.setAttribute('for', list);
  dynListInput.innerText = list;

  document.querySelector('#listWindow').appendChild(listDiv);
  listDiv.appendChild(dynListLine);
  listDiv.appendChild(dynListInput);
};

export { addTaskElements, addList };
