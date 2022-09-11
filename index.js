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

var theTeam = [];

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
      theTeam.push(manager);
      console.log(theTeam);
      // fs.writeFileSync("emp.json",JSON.stringify(manager))
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
      theTeam.push(engineer);
      console.log(theTeam);
      // console.log(engineer);
      // const data = fs.readFileSync('emp.json');
      // const obj = JSON.parse(data);
      // const newnew = Object.assign({}, engineer, obj);
      // console.log(newnew);
      // console.log(JSON.stringify(obj))
      // const newJ = {...engstr, ...obj};
      // console.log(newJ);
      // fs.writeFileSync("emp2.json",JSON.stringify(newnew))
      toMenu();
    })
    
    .catch((err) => console.error(err));
}


init();

