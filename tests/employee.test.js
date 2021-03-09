const Employee = require("../employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with 'name' string, 'id' number, and 'email' string", () => {
            const Employee = new Employee();

            expect(dayCare).toEqual({ name: '', id: number, email: '' });
        });
    });
});
