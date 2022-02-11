const Employee = require("./Employee");
 class Engineer extends Employee {
    constructor (name, employeeID, employeeEmail, gitHubUserName) {
        super (name, employeeID, employeeEmail);
        this.gitHubUserName = gitHubUserName; 
    } 
    getGithub () {
        return this.gitHubUserName;
    }
    getRole () {
        return "Engineer";
    }
}
module.exports = Engineer; 