const inquirer = require('inquirer');
const fs = require('fs');


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

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

   getEmployee(){
        inquirer.prompt(employeeQuestions)
       
        .then(answers => (fs.writeFileSync("emp.json", JSON.stringify(answers))))

        .catch((err) => console.error(err));
       
   }

   logit(){
    console.log("LJSFDLISDJHFLKDSJNF"+Employee.name)
   }
    


}

// const test = new Employee();
// test.getEmployee();
// console.log("HERERREERE"+test);

module.exports = Employee;
// module.exports = test;

