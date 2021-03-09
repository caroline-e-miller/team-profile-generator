class Employee {
    constructor(name, email, id) {
        this.name = name,
            this.email = email,
            this.id = id
    }

    getName() {

    }

    getId() {

    }

    getEmail() {

    }

    getRole() {

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

    }
    getRole() {
        // getRole overriden to return Intern
    }
}