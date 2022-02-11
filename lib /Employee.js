class Employee{
    constructor(name, employeeID, employeeEmail) {
        this.name = name;
        this.employeeID = employeeID; 
        this.employeeID = employeeEmail;
    }
    //Getting Name  
    getName() {
        return this.name;
    }

    // Getting ID 
    getID() {
        return this.employeeID
    }
    // Getting Email 
    getEmail() {
        return this.employeeEmail
    }

    //Getting Role
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;