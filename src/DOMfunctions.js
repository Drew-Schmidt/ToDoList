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
  // Append all
  document.querySelector('#taskWindow').appendChild(dynTaskLine);
  dynTaskLine.appendChild(dynTaskInput);
  dynTaskLine.appendChild(dynTaskDone);
  dynTaskLine.appendChild(dynTaskDelete);
};

// Add List Elements
const addList = (list) => {
  // Create List block
  const dynListLine = document.createElement('div');
  dynListLine.classList.add('listDiv');
  // Add text
  const dynListInput = document.createElement('h3');
  dynListInput.innerText = list.value;

  document.querySelector('#listWindow').appendChild(dynListLine);
  dynListLine.appendChild(dynListInput);
};

export { addTaskElements, addList };
