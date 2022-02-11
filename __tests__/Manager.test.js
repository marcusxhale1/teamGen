//connecting to Manager.js 
const Manager = require('../lib /Manager');

//creating only one test to see if I can get it to pass. If it does, then we are good to go. 
test('creates a new manager', () => {
    const newManager = new Manager('Marcus', 1234, 'marcusxhale1@gmail.com', 9252079127 );

    expect(newManager.phoneNumber).toEqual(expect.any(Number));

});