const Intern = require('../lib /Intern');


test('tests phone number', () => {
    const newIntern = new Intern('Marcus', 1234, 1234, 'marcusxhale1@gmail.com', 9252079127, );

    expect(newIntern.employeeID).toEqual(expect.any(Number));

});