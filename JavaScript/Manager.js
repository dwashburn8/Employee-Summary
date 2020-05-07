// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")


class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id,email);

        this.officeNumber = officeNumber;
        this.role="Manager";
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}
//     getManager(){
// return inquirer
// .prompt([
//     {
//         type: "input",
//         name: "name",
//         message: "What is your manager's name?"
//     },
//     {
//         type: "input",
//         name: "id",
//         message: "What is your manager's id?"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is your manager's name?"
//     },
//     {
//         type: "input",
//         name: "officeNumber",
//         message: "What is your manager's office number?"
//     }
// ])
//     }
// }

// role = "manager";

module.exports = Manager;
