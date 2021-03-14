const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const saveMarkdown = util.promisify(fs.writeFile);

// Creates an array of questions for user input
const starterQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team managers name?',
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
            message: 'Would you like to add employees?',
            choices: ['Engineer', 'Intern', 'Finished']
        },
    ]);
};

function promptEngineerQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name?',
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
            type: 'list',
            name: 'employee',
            message: 'Would you like to add another employee?',
            choices: ['Engineer', 'Intern', 'Finished']
        },

    ])
}

function promptInternQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?',
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
        {
            type: 'list',
            name: 'employee',
            message: 'Would you like to add another employee?',
            choices: ['Engineer', 'Intern', 'Finished']
        },
    ])
}



// Creates a function to initialize app
function init() {
    let engineers = [];
    let interns = [];
    let addEmployee = false;
    starterQuestions()
        .then(async (data) => {
            addEmployee = data.employee !== 'Finished';
            console.log(addEmployee, 'addEmployee')
            console.log(data.employee, 'data.employee')
            let employeeType = data.employee;
            while (addEmployee) {
                if (employeeType === 'Engineer') {
                    // prompt engineer questions
                    await promptEngineerQuestions().then((engineerData) => {
                        engineers.push(engineerData);
                        employeeType = engineerData.employee;
                        addEmployee = engineerData.employee !== 'Finished';
                    })
                } else if (employeeType === 'Intern') {
                    // prompt intern questions
                    await promptInternQuestions().then((internData) => {
                        interns.push(internData);
                        employeeType = internData.employee;
                        addEmployee = internData.employee !== 'Finished';
                    })
                }
            }
            data.engineers = engineers;
            data.interns = interns;
            saveMarkdown('index.html', generateTeam(data))
        })
        .then(() => console.log('Wrote to index.html.'))
        .catch((err) => console.error(err));
};



const generateTeam = (data) =>
    `<!DOCTYPE html>
<html lang="en">
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
    <title>Team Roster</title>
</head>

<body>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1" id="header">The Dream Team</span>
            </div>
        </nav>
    <div class='container'>
        <div class='row'>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Manager</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Leading the way</h6>
                    <p class="card-text">Our team manager is ${data.managerName}.</p>
                    <ul>
                        <li>ID: ${data.managerId}</li>
                        <li>Office number: ${data.officeNumber}</li>
                        <li><a href="mailto:${data.managerEmail}">Email</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="row">
        ${data.engineers.map(data => {
        return `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Engineer</h5>
                <h6 class="card-subtitle mb-2 text-muted">The heart of the operation</h6>
                <p class="card-text">One of our engineers is ${data.engineerName}.</p>
                <ul>
                    <li>ID: ${data.engineerId}</li>
                    <li><a href="mailto:${data.internEmail}">Email</a></li>
                    <li><a href="http://github.com/${data.engineerGithub}" target="_blank" class="card-link">Github</a></li>
                <ul>
            </div>
        </div>`
    })}
    </div>

            <div class="row">
            ${data.interns.map(data => {
        return `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Intern</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Tomorrow's workforce</h6>
                        <p class="card-text">One of our interns is ${data.internName} from the ${data.internSchool}.</p>
                        <ul>
                            <li>ID: ${data.internId}</li>
                            <li><a href="mailto:${data.internEmail}">Email</a></li>
                        </ul>
                        </div>
                </div>`
    })}
            </div>

        
    </div>
</body>

</html>;`


// Function call to initialize app
init();