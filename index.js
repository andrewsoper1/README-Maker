
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown  from './utils/generateMarkdown.js';




const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name:  'description',
        message: 'Please enter a brief description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how this project can be used.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this project:',
        choices: [
            'Apache 2.0',
            'Boost 1.0',
            'GNU AGPL v3.0',
            'GNU GPL v3.0',
            'GNU LGPL v3.0',
            'MIT',
            'Mozilla 2.0',
            'N/A',


        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide information as to how users can contribute to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter any testing instructions for this project.'
    },
    {
        type: 'input',
        name: 'userName',
        message: 'what is your GitHub username?'

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address that contributers may contact?'
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Successfully created README .md file!')
)};

function init() {
    inquirer.prompt(questions).then((data) => {
        console.group(JSON.stringify(data, null, ""));
        writeToFile('README.md', data);
        

});
}

init();
