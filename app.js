const genHTML = require('./lib /genHTML/genHTML ')
const Manager = require('./lib /Manager');
const Engineer = require('./lib /Engineer');
const Intern = require('./lib /Intern');
const fs = require('fs');
const inquirer = require('inquirer');

array = [];

const newManager = () => {
    return inquirer.prompt ([
        {
            type: 'input', 
            name: 'name',
            message: "Who's the new manager on the team?", 
        }, 
        {
            type: 'input', 
            name: "employeeID", 
            message: "What's the new manager's employee ID?"
        }, 
        {
            type: 'input', 
            name: "employeeEmail",
            message: "What's the manager's personal email?"
        }, 
        {
            type: 'input', 
            name: "phoneNumber",
            message: "What's the manager's personal phone number?"
        } 
    ])
    .then(managerInfo => {
        const  { name, employeeID, employeeEmail, phoneNumber } = managerInfo; 
        const manager = new Manager (name, employeeID, employeeEmail, phoneNumber);

        array.push(manager); 
        console.log(manager); 
    })
};

const newEmployee = () => {
    console.log(`
    =============================================
    We are adding new employees to the system now
    =============================================`);
    return inquirer.prompt ([
        {
            type: 'list', 
            name: 'position', 
            message: 'Is this employee an Engineer or Intern?', 
            choices: ['Engineer', 'Intern']
        }, 
        {
            type: 'input', 
            name: 'name',
            message: "Who's the employee on the team?", 
        }, 
        {
            type: 'input', 
            name: "employeeID", 
            message: "What's the employee's new ID?"
        }, 
        {
            type: 'input', 
            name: "employeeEmail",
            message: "What's the employee's personal email?"
        }, 
        {
            type: 'input', 
            name: "gitHubUserName",
            message: "What's the employee's Github username?", 
            when: (input) => input.role === "Engineer"
        }, 
        {
            type: "input", 
            name: "college", 
            message: "What college is the intern going to?", 
            when: (input) => input.role === "Intern"
        }, 
        {
            type: 'confirm', 
            name: 'confirmEmployeeAdded', 
            message: "Would you like to add more employee's to the system?", 
            default: false
        }
    ])
    .then(employeeInfo => {
        let { name, employeeID, employeeEmail, role, github, college, confirmEmployeeAdded } = employeeInfo; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, employeeID, employeeEmail, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, employeeID, employeeEmail, college);

            console.log(employee);
        }

        array.push(employee); 

        if (confirmEmployeeAdded) {
            return newEmployee(array); 
        } else {
            return array;
        }
    })
};

const writeFile = information => {
    fs.writeFile("./index.html", information, err => {
        if(err) {
            console.log("The page DID NOT load");
            return; 
        }
        else{
            console.log("The HTML has been created!!!")
        }
    })
};
newManager()
.then(newEmployee)
.then(array => {
    return genHTML(array);
})
.then(pgHTML => {
    return writeFile(pgHTML);
})
.catch(err => {
    console.log(err);
    console.log("Error across the board. Try to find that bug if you can.")
});