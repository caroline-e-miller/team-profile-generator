const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const saveMarkdown = util.promisify(fs.writeFile);

// Creates an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What the team managers name?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the team managers ID number?',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team managers email address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the mean managers office number?',
        },
        {
            type: 'list',
            name: 'employee',
            message: 'employee type',
            choices: ['engineer', 'intern']
        },
        {
            type: 'input',
            name: 'engineerName',
            message: 'What the engineers name?',
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the engineers ID number?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineers email address?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineers Github username?',
        },
        {
            type: 'input',
            name: 'internName',
            message: 'What the interns name?',
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the interns ID number?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns email address?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the interns school?',
        },
    ]);
};

const generateTeam = () =>
    `<!DOCTYPE html>
<html lang="en">
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <title>Team Roster</title>
</head>

<body>
    <div class='container'>
        <div class='row'>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Manager</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">You can reach ${this.managerName} at ${this.managerEmail} or at ${this.managerGithub}.
                    - ID: ${this.managerId}.
                    - Office number: ${this.officeNumber}.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>

                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Intern</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">You can reach ${this.internName} at ${this.internEmail} or at ${this.internGithub}.
                        - ID: ${this.internId}.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>

                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Engineer</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">You can reach ${this.engineerName} at ${this.engineerEmail} or at ${this.engineerGithub}.
                        - ID: ${this.engineerId}</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>;`

// Creates a function to initialize app
function init() {
    questions()
        .then((data) => saveMarkdown('index.html', generateTeam(data)))
        .then(() => console.log('Wrote to index.hmtl.'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();