const inquirer = require('inquirer');
const fs = require('fs')


inquirer
``.prompt([
        {
        type: 'input',
        message: 'What is your user name?',
        name: 'name',
        },
        {
        type: 'input',
        message: 'What is your employee id?',
        name: 'id',
        },
        {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        },
        {
        type: 'input',
        message: 'What is your office number?',
        name: 'number',
        },
    ])
    
    .then((response) => 
    console.log('Thanks for entering info')) ;   