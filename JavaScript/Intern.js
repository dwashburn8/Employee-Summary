// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
const inquirer = require("inquirer");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name,id,email);
        this.school = school;
        this.role="Intern"

    }
    getSchool(){
        return this.school
    }
}
//     getIntern(){
//         return inquirer
//         .prompt([
//             {
//                 type: "input",
//                 name: "name",
//                 message: "What is your intern's name?"
//             },
//             {
//                 type: "input",
//                 name: "id",
//                 message: "What is your intern's id?"
//             },
//             {
//                 type: "input",
//                 name: "email",
//                 message: "What is your intern's name?"
//             },
//             {
//                 type: "input",
//                 name: "school",
//                 message: "What school does your intern attend?"
//             }
//         ])
//             }
// }
// role = "intern";


module.exports = Intern;
