const Engineer = require('../lib /Engineer');


test('tests employee ID', () => {
    const newEngineer = new Engineer('Marcus', 1234, 1234, 'marcusxhale1@gmail.com', 9252079127, );

    expect(newEngineer.employeeID).toEqual(expect.any(Number));

});