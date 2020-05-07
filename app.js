const Manager = require("./JavaScript/Manager");
const Engineer = require("./JavaScript/Engineer");
const Intern = require("./JavaScript/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./JavaScript/htmlRenderer");

let employeeArr = []

function getManager() {

    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's Id?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?",
        },
        {
            type: "input",
            name: "managerOfficeNum",
            message: "What is the manager's office number?",
        }
    ])
}




function pickEmployee(answer) {
    // console.log(answer);

    if (answer.role === "Engineer") {
        return EngineerQ()
            .then((answer) => {
                const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
                employeeArr.push(engineer)
            })
            .then(() => {
                return nextQ()
            })
            .then((answer) => {
                return pickEmployee(answer)
            })

    } else if (answer.role === "Intern") {
        return InternQ()
            .then((answer) => {
                const intern = new Intern(answer.name, answer.id, answer.email, answer.school)
                employeeArr.push(intern)
            })
            .then(() => {
                return nextQ()
            })
            .then((answer) => {
                return pickEmployee(answer)
            })

    } else {
        return fs.writeFile("final.html", render(employeeArr), function (err) {
            if (err) { throw err } else {

                console.log("Check your new HTML file!");
            }
        })

    }
}

function EngineerQ() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: `What is your Engineer's name?`
            },
            {
                type: "input",
                name: "id",
                message: `What is your Engineer's id?`
            },
            {
                type: "input",
                name: "email",
                message: `What is your Engineer's email?`
            },
            {
                type: "input",
                name: "github",
                message: `What is your Engineer's GitHub username?`
            }
        ])
}

function InternQ() {

    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: `What is your Intern's name?`
            },
            {
                type: "input",
                name: "id",
                message: `What is your Intern's id?`
            },
            {
                type: "input",
                name: "email",
                message: `What is your Intern's email?`
            },
            {
                type: "input",
                name: "school",
                message: `What school does your intern attend?`
            }
        ])
}


function nextQ() {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add anymore employees"]
        }
    ])


}

getManager()
    .then((answer) => {
        const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNum)
        employeeArr.push(manager)
    })
    .then(() => {
        return nextQ()
    })
    .then((answer) => {
        return pickEmployee(answer)
    })


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
