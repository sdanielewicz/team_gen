// declarations
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generate = require('./src/generateHTML');

var theTeam = [];

// questions 
const menu = [
  {
    type: 'list',
    name: 'role',
    message: 'What is the employee\'s role? Select exit to exit and generate HTML.',
    choices: [
      'Engineer',
      'Intern',
      'Exit']
  },
]

const managerQuestions = [{
  type: 'input',
  name: 'name',
  message: 'Welcome to Team Builder. What the name of the Manager?',
},
{
  type: 'input',
  name: 'id',
  message: 'What is the manager id?',
},
{
  type: 'input',
  name: 'email',
  message: 'What is the manager email?',
},
{
  type: 'input',
  name: 'office',
  message: 'What is the manager office number?',
},
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the engineer name??',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the engineer id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the engineer email?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the engineer github username?',
  },

];

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the intern name??',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the intern id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the intern email?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What school does the intern attend?',
  },

];

// functions
function init() {

  inquirer.prompt(managerQuestions)
    .then(answers => {

      const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
      manager.role = "Manager";

      return manager;

    })
    .then(manager => {
      theTeam.push(manager);
      toMenu();
    })

    .catch((err) => console.error(err));
}

function toMenu() {
  inquirer.prompt(menu)
    .then(answer => {
      switch (answer.role) {
        case "Engineer":
          getEngineer();
          break;

        case "Intern":
          getIntern();
          break;

        case "Exit":
          fs.writeFileSync("./dist/emp.json", JSON.stringify(theTeam));
          generate.readEmployee();
          console.info("Your Team's HTML page has been generated. View it in the /dist folder")
          break;
      }
    });
}

function getEngineer() {
  inquirer.prompt(engineerQuestions)
    .then(answers => {

      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      engineer.role = "Engineer";

      return engineer;

    })
    .then(engineer => {
      theTeam.push(engineer);
      console.log(theTeam);
      toMenu();
    })

    .catch((err) => console.error(err));
}

function getIntern() {
  inquirer.prompt(internQuestions)
    .then(answers => {

      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      intern.role = "Intern";

      return intern;

    })
    .then(intern => {
      theTeam.push(intern);
      console.log(theTeam);
      toMenu();
    })

    .catch((err) => console.error(err));
}

// initialize application 
fs.writeFileSync('./dist/index2.html', generate.genHTML());
fs.writeFileSync('./dist/emp.json', "");

init();

