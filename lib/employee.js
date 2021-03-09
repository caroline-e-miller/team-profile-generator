class Employee {
    constructor(name, email, id) {
        this.name = name,
            this.email = email,
            this.id = id
    }

    getName() {
        console.log(`Name: ${this.name}`);
    }

    getId() {
        console.log(`Name: ${this.id}`);
    }

    getEmail() {
        console.log(`Name: ${this.email}`);
    }

    getRole() {
        console.log(`Name: ${this.role}`);
    }
}

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole() {
        // getRole overriden to return Manager
    }
}

class Engineer extends Employee {
    constructor(github) {
        this.github = github
    }
    getGithub() {
        console.log(`Github: ${this.github}`);
    }
    getRole() {
        // getRole overriden to return Engineer
    }
}

class Intern extends Employee {
    constructor(school) {
        this.school = school
    }
    getSchool() {
        console.log(`School: ${this.school}`);
    }
    getRole() {
        // getRole overriden to return Intern
    }
}