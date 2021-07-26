const { Intern } = require('../lib/employee');

// test case for intern class
describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with 'name' string, 'id' number, 'school' string, and 'email' string", () => {
            let testIntern = new Intern('Drew', 123, 'drew.miller@ymail.com', 'Colorado State');

            expect(testIntern.getName()).toBe('Drew');
            expect(testIntern.getId()).toBe(123);
            expect(testIntern.getEmail()).toBe('drew.miller@ymail.com');
            expect(testIntern.getSchool()).toBe('Colorado State');
        });
    });
});