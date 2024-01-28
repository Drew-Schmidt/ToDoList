/* eslint-disable func-names */
/* eslint-disable no-console */
import uniqid from 'uniqid';

let projDb = [];

//Project object
class Project {
  constructor(id,projName){
    this.id = id;
    this.projName = projName;
  };
};

//Create new project
const addNewProj = (projName) => {
  const newProj = new Project(uniqid(),projName);
  projDb.push(newProj);
};

//Delete project 
const deleteProj = (projectId) => {
  const index = projDb.findIndex(list => list.id === projectId);
  
  if (index !== -1) {
    projDb.splice(index, 1);
  };
};

export {
  addNewProj,
  deleteProj,
  projDb
}