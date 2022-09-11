// get manager 
// to menu for engineer or intern (or exit)
// enter engineer or intern 
// back to menu 

// team manager’s name, employee ID, email address, and office number

const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/employee")
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');



const employeeQuestions =  [ {
  type: 'input',
  name: 'name',
  message: 'What the name of the Employee?',
},
{
  type: 'input',
name: 'id',
message: 'What the employee id?',
},
{
type: 'input',
name: 'email',
message: 'What the employee email?',
},
]

const managerQuestions =  [ {
  type: 'input',
  name: 'name',
  message: 'What the name of the Manager?',
},
{
  type: 'input',
name: 'id',
message: 'What the manager id?',
},
{
type: 'input',
name: 'email',
message: 'What the manager email?',
},
{
  type: 'input',
  name: 'office',
  message: 'What the manager office number?',
  },
  ];




const menu =  [
  {
    type: 'list',
    name: 'role',
    message: 'What is the employee\'s role?',
    choices: [
    'Engineer',
    'Intern']
  },
]

const engineerQuestions = [
  {
  type: 'input',
  name: 'name',
  message: 'What the name??',
},
{
  type: 'input',
name: 'id',
message: 'What the id?',
},
{
type: 'input',
name: 'email',
message: 'What the email?',
},
{
  type: 'input',
  name: 'github',
  message: 'What github?',
  },

];

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







// process input and add to
// new employee
// logic for employee types to add to subclass



function init() {

    inquirer.prompt(managerQuestions)
  .then(answers => {
  
    const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
    manager.role = "Manager";

    return manager;

  })
    .then(manager => {
      fs.writeFileSync("emp.json",JSON.stringify(manager))
      toMenu();
    })
    
    .catch((err) => console.error(err));
}

function toMenu(){
  inquirer.prompt(menu)
  .then(answer => {
    switch (answer.role) {
      case "Engineer":
      getEngineer();

      break;
      case "Intern":
        break;
      case "Exit":
        break;
    }
  });
}

function getEngineer(){
  inquirer.prompt(engineerQuestions)
  .then(answers => {
  
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    engineer.role = "Engineer";

    return engineer;

  })
    .then(engineer => {
      var data = fs.readFileSync('emp.json');
      console.log(data);
      var obj = JSON.parse(data);
      console.log(obj)
      obj.push(engineer);
      fs.writeFileSync("emp.json",JSON.stringify(obj))
      toMenu();
    })
    
    .catch((err) => console.error(err));
}


init();
