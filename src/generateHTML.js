const fs = require('fs');
const HTMLparse = require('node-html-parser');
var employeeCards = [];



function writeCards(employeeCards) {
    var allCards = "";

    employeeCards.forEach(entry => {
        allCards = allCards + entry;
    })

    const data = fs.readFileSync('./dist/index2.html');
    const root = HTMLparse.parse(data);

    const body = root.querySelector('body');
    body.set_content(allCards).innerHTML;
    fs.writeFileSync('./dist/index2.html', root.toString());
}

function readEmployee() {
    let data = fs.readFileSync("./dist/emp.json");
    let employeeList = JSON.parse(data);

    employeeList.forEach(employee => {
        switch (employee.role) {
            case "Manager":
                writeManager(employee);
                break;

            case "Engineer":
                writeEngineer(employee);
                break;

            case "Intern":
                writeIntern(employee);
                break;
        }
    });
    
    writeCards(employeeCards);
    
}

function writeManager(employee) {
    let managerCard = `
 <div class="card" style="width: 18rem;">
 <div class="card-body">
 <h5 class="card-title">${employee.name}</h5>
 <h6 class="card-title">${employee.role}</h6>

 <p class="card-text">ID:${employee.id}</p>
 <p class="card-text">Email:<a href="mailto:${employee.email}">${employee.email}</a></p>
   <p class="card-text">${employee.office}</p>
 </div>
</div>
 `
    employeeCards.push(managerCard);
    return employeeCards;
}

function writeEngineer(employee) {
    let engineerCard = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.name}</h5>
      <h6 class="card-title">${employee.role}</h6>
   
      <p class="card-text">ID:${employee.id}</p>
      <p class="card-text">Email:<a href="mailto:${employee.email}">${employee.email}</a></p>
      <p class="card-text">Github:<a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></p>
    </div>
   </div>
  `
    employeeCards.push(engineerCard);
    return employeeCards;
}

function writeIntern(employee) {
    let internCard = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${employee.name}</h5>
    <h6 class="card-title">${employee.role}</h6>
 
    <p class="card-text">ID:${employee.id}</p>
    <p class="card-text">Email:<a href="mailto:${employee.email}">${employee.email}</a></p>
      <p class="card-text">${employee.school}</p>
    </div>
   </div>
  `
    employeeCards.push(internCard);
    return employeeCards;
}

function genHTML() {
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

    return htmlContent;
}

// module.exports = {readEmployee};
// module.exports = {genHTML};

module.exports = {readEmployee, genHTML};


//   const data = fs.readFileSync('../dist/index2.html');
//   const root = HTMLparse.parse(data);


// // var root = HTMLparse.parse(html)
// console.log(root.structure);

// const body = root.querySelector('body');
// body.set_content(`${engineerCard}`).innerHTML;
// fs.writeFileSync('../dist/index2.html', root.toString());

//   const data = fs.readFileSync('../dist/index2.html');
//   const root = HTMLparse.parse(data);


// // var root = HTMLparse.parse(html)
// console.log(root.structure);

// const body = root.querySelector('body');
// body.set_content(`${engineerCard}`).innerHTML;
// fs.writeFileSync('../dist/index2.html', root.toString());