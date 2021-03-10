const { Engineer } = require('../lib/employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with 'name' string, 'id' number, 'github' string, and 'email' string", () => {
            let testEngineer = new Engineer('Drew', 123, 'drew.miller@ymail.com', 'drew-miller');

            expect(testEngineer.getName()).toBe('Drew');
            expect(testEngineer.getId()).toBe(123);
            expect(testEngineer.getEmail()).toBe('drew.miller@ymail.com');
            expect(testEngineer.getGithub()).toBe('drew-miller');
        });
    });
});