const { Employee } = require('../lib/employee');

// test case for employee class
describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with 'name' string, 'id' number, and 'email' string", () => {
            let testEmployee = new Employee('Caroline', 123, 'caroline.miller@ymail.com');

            expect(testEmployee.getName()).toBe('Caroline');
            expect(testEmployee.getId()).toBe(123);
            expect(testEmployee.getEmail()).toBe('caroline.miller@ymail.com');
        });
    });
});
