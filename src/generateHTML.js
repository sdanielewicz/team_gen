const fs = require('fs');

fs.writeFileSync('../dist/index2.html',generateHTML());

function readIndex (){
    const data = fs.readFileSync('../dist/index2.html');
    const index = JSON.parse(data);
    return index;
}


function readEmployee (){
let data = fs.readFileSync("../dist/emp.json");
let employeeList = JSON.parse(data);
console.log(employeeList);


employeeList.forEach(employee => {
    switch (employee.role) {
        case "Manager":
            writeManager(employee);
            break;

        case "Engineer":
        writeEngineer(employee);
        break;
  
        case "Intern":
        // writeIntern();
        break;
      }
      generateHTML();
});
}

function writeManager(employee){
    console.log("MAN"+employee.name);
    

    const managerCard = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.name}</h5>
      <h6 class="card-title">${employee.role}</h5>

      <p class="card-text">${employee.id}</p>
      <p class="card-text">${employee.email}</p>
      <p class="card-text">${employee.office}</p>


    </div>
  </div>
  `
  readIndex();

  return managerCard;
}

function writeEngineer(employee){
    console.log("ENG"+employee.name);
    

    const engineerCard = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.name}</h5>
      <h6 class="card-title">${employee.role}</h5>

      <p class="card-text">${employee.id}</p>
      <p class="card-text">${employee.email}</p>
      <p class="card-text">${employee.github}</p>


    </div>
  </div>
  `
  return engineerCard;
}

function generateHTML (){
    const htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta http-equiv="X-UA-Compatible" content="ie=edge" />


 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
 <title>Your Team</title>
</head>

<body>


</body>
</html>`;

// fs.writeToFile('../dist/index2.html', htmlContent);
return htmlContent;
}


readEmployee();

