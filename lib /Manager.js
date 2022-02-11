const Employee = require('./Employee');
class Manager extends Employee {
    constructor (name, employeeID, employeeEmail, phoneNumber) {
        super (name, employeeID, employeeEmail); 
        this.phoneNumber = phoneNumber; 
    }
    getRole () {
        return "Manager";
    }
}

module.exports = Manager; 