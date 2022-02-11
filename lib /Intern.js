const Employee = require('./Employee');
class Intern extends Employee  {
    constructor (name, employeeID, employeeEmail, college) {
        super (name, employeeID, employeeEmail); 
        this.college = college; 
    }
    getSchool () {
        return this.college;
    }
    getRole () {
        return "Intern";
    }
}
module.exports = Intern; 