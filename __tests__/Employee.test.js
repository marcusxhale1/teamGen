const Employee = require('../lib /Employee');

test('tests employee ID', () => {
    const newEmployee = new Employee('Marcus', 1234, 1234, 'marcusxhale1@gmail.com', 9252079127, );

    expect(newEmployee.employeeID).toEqual(expect.any(Number));

});