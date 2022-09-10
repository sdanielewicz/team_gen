const Employee = require("./employee");
const inquirer = require('inquirer');
const fs = require('fs');

function readit(){
let data = fs.readFileSync('emp.json');
let emp = JSON.parse(data);
console.log(emp.name);
}


const managerQuestions =  [ {
  type: 'input',
  name: 'office',
  message: 'What the manager office number?',
  },
  ]


class Manager extends Employee {
    constructor(name, id, email, office){
        // const name = Employee.name;
        // const id = Employee.id;
        // const email = Employee.email;
        
// console.log(name);
        // super(name, id, email);
        
        // console.log(name);
        super(name,id,email);

        this.office = office;
    }

    getOffice(){
      inquirer.prompt(managerQuestions)
      .then((answers) => {
        console.log(answers)
    })
    .catch((err) => console.error(err));
   
}
    }


    const test2 = new Manager();
test2.getEmployee();
readit()
// test2.getOffice();
console.log(test2);


module.exports = Manager;