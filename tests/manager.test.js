const { Manager } = require('../lib/employee');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with 'name' string, 'id' number, 'officeNumber' number, and 'email' string", () => {
            let testManager = new Manager('Caroline', 123, 'caroline.miller@ymail.com', '319');

            expect(testManager.getName()).toBe('Caroline');
            expect(testManager.getId()).toBe(123);
            expect(testManager.getEmail()).toBe('caroline.miller@ymail.com');
            expect(testManager.getOfficeNumber()).toBe('319');
        });
    });
});