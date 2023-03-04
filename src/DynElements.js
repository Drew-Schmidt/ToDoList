import * as objects from './Objects';

// Select content windows
const contentWindow = document.querySelector('#taskWindow');
const projectWindow = document.querySelector('#listWindow');

// FUNCTION: Add Task Elements
const addTaskElements = (task, priority, note, complete) => {
  const taskContainer = document.createElement('div');
  const taskContent = document.createElement('H4');
  const taskBtnContainer = document.createElement('div');
  const taskCompelteBtn = document.createElement('button');
  const taskDeleteBtn = document.createElement('button');

  // Check if task is complete
  if (priority === 'High') {
    taskContainer.style.border = 'solid .15rem rgb(252,141,93)';
  }
  if (complete === true) {
    taskContainer.style.backgroundColor = '#27D582';
  }

  taskContainer.classList.add('taskDiv');
  taskContent.textContent = `
    Task: ${task} | Priority: ${priority}
    `;

  // Create Button Container
  taskBtnContainer.classList.add('taskBtnContainer');

  // Create complete button
  taskCompelteBtn.classList.add('completeBtn');
  taskCompelteBtn.innerText = 'Complete';
  taskCompelteBtn.addEventListener('click', (e) => {
    // Apply 'completed' style
    e.target.parentNode.parentNode.style.backgroundColor = '#27D582';

    // Get data-log values
    const taskID = e.target.parentNode.parentNode.getAttribute('data-log');
    const listID = document.querySelector('input[type="radio"]:checked').getAttribute('data-log');

    // Set item Complete in array (could this be in a class?)
    objects.myList[listID].task[taskID].complete = true;
    objects.myList[listID].task[taskID].priority = 'Low';
  });

  // create delete button
  taskDeleteBtn.classList.add('deleteBtn');
  taskDeleteBtn.innerText = 'Delete';
  taskDeleteBtn.addEventListener('click', (event) => {
    event.target.parentNode.parentNode.remove();

    // Get Task ID and List ID
    const taskID = event.target.parentNode.parentNode.getAttribute('data-log');
    const listID = document.querySelector('input[type="radio"]:checked')
      .getAttribute('data-log');

    // Delete array item by task ID ( could this be in a class?)
    objects.myList[listID].task.splice(Number(taskID), 1);
  });
  // Append all
  contentWindow.appendChild(taskContainer);
  taskContainer.appendChild(taskContent);
  taskContainer.appendChild(taskBtnContainer);
  taskBtnContainer.appendChild(taskCompelteBtn);
  taskBtnContainer.appendChild(taskDeleteBtn);
};

// FUNCTION: Add List Elements
const addList = (list) => {
  const projectContainer = document.createElement('div');
  const projectBtn = document.createElement('input');
  const projectBtnLabel = document.createElement('label');

  // List Container
  projectContainer.classList.add('testBox');

  // List Input
  projectBtn.classList.add('listDiv');
  projectBtn.setAttribute('type', 'radio');
  projectBtn.setAttribute('name', 'activeList');
  projectBtn.setAttribute('data-log', '0');
  projectBtn.checked = true;

  // Add Text
  projectBtnLabel.setAttribute('for', list);
  projectBtnLabel.innerText = list;

  // Append All
  projectWindow.appendChild(projectContainer);
  projectContainer.appendChild(projectBtn);
  projectContainer.appendChild(projectBtnLabel);

  // Clear task window on creation of new list
  contentWindow.textContent = '';
};

// Select active list
const selectList = () => {
  const activeList = document.querySelectorAll('.listDiv');
  activeList.forEach((project) => {
    project.addEventListener('click', (event) => {
      contentWindow.textContent = '';
      const active = event.target.getAttribute('data-log');

      // Populate the active list
      objects.myList[active].task.forEach((task) => {
        addTaskElements(
          task.name,
          task.priority,
          task.notes,
          task.complete,
        );
        // Set Data-log values
        objects.logReset('.taskDiv');
      });
    });
  });
};

export { addTaskElements, addList, selectList };
