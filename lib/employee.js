const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'employee';
    }

}

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'manager';
    }
}

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github
    }
    getGithub() {
        console.log(`Github: ${this.github}`);
    }
    getRole() {
        return 'engineer';
    }
}

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id);
        this.school = school
    }
    getSchool() {
        console.log(`School: ${this.school}`);
    }
    getRole() {
        return 'intern';
    }
}

const caroline = new Employee('Caroline', 'garfield@yahoo.com', '9513');
const carolineEngineer = new Engineer('Caroline', 'caroline@google.com', 13, 'caroline-e-miller');

console.log(caroline.getName());
console.log(caroline.getEmail());
console.log(caroline.getId());

console.log(carolineEngineer.getName());
console.log(carolineEngineer.getEmail());
console.log(carolineEngineer.getId());
console.log(carolineEngineer.getGithub());

module.exports = { Employee, Manager, Engineer, Intern }