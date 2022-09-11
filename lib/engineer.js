const Employee = require("./employee");
const inquirer = require('inquirer');
const fs = require('fs');







class Engineer extends Employee {
    constructor(name, id, email, github){
        // const name = Employee.name;
        // const id = Employee.id;
        // const email = Employee.email;
        
// console.log(name);
        // super(name, id, email);
        
        // console.log(name);
        super(name,id,email);

        this.github = github;
    }

    }




module.exports = Engineer;