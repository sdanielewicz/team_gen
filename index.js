// get manager 
// to menu for engineer or intern (or exit)
// enter engineer or intern 
// back to menu 

// team manager’s name, employee ID, email address, and office number

const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/employee")
const Manager = require('./lib/manager');





const menu =  [ {
    type: 'input',
    name: 'name',
    message: 'What the name of the Employee?',
  },
  {
    type: 'list',
    name: 'role',
    message: 'What is the employee\'s role?',
    choices: [
    'Employee',
    'Manager',
    'Engineer',
    'Intern']
  },
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What the name of the Employee?',
      },
      {
        type: 'list',
        name: 'role',
        message: 'What is the employee\'s role?',
        choices: [
        'Engineer',
        'Intern']
      },
]


// employee class 


const teamManager = new Manager();
teamManager.getName();
teamManager.getId();
teamManager.getEmail();
teamManager.getOffice();
console.log("HEREEEEEEEE"+Employee.name + Employee.id + Employee.email)

console.log(teamManager);


// process input and add to
// new employee
// logic for employee types to add to subclass



function init() {

    // inquirer.prompt(manager)
    // .then(answers => writeToFile('README.md', gen.generateMD(answers)))
    // .then(() => console.log('Successfully wrote to read.md'))
    // .catch((err) => console.error(err));
}

init();
