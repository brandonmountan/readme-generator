var inquirer = require('inquirer');
var fs = require('fs');

const readMeBlueprint = ({
    title,
    description,
    installationInstructions,
    usageInformation,
    contributionGuidelines,
    license,
    testInstructions,
    githubUsername,
    emailAddress,
}) =>  `
# ${title}

${license}

## Description

${description}

## Table of Contents

 - [Installation](#installation)
 - [Usage](#usage)
 - [Constribution Guidelines](#howtocontribute)
 - [License](#license)
 - [Test Instructions](#tests)
 - [Questions](#questions)

## Installation

${installationInstructions}

## Usage

${usageInformation}

## How to Contribute

${contributionGuidelines}

## Tests

${testInstructions}

## License

This application is covered under the ${license} license.

## Questions

Link to my github profile!
(https://www.github.com/${githubUsername})

Send an email with any questions you have.
(${emailAddress})

`;

inquirer
.prompt([
    { 
    type: 'input',
    name: 'title',
    message: 'What is the title of your project',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project',
    },
    {
    type: 'input',
    name: 'installationInstructions',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
    type: 'input',
    name: 'usageInformation',
    message: 'Provide instructions and examples for use.',
    },
    {
    type: 'input',
    name: 'contributionGuidelines',
    message: 'If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so.',
    },
    {
    type: 'input',
    name: 'testInstructions',
    message: 'Enter test instructions',
    },
    {
    type: 'list',
    name: 'license',
    choices: [
        'MIT License',
        'Appache 2.0',
        'ISC',
        'Mozilla',
        ]
    },
    {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your github username',
    },
    {
    type: 'input',
    name: 'emailAddress',
    message: 'Enter your email address'
    },
])
.then((answers) => {
    console.log(answers)
    switch (answers.license) {
        case 'MIT License':
            answers.license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            let mitReadMeBlueprint = readMeBlueprint(answers)
            fs.writeFile('README.md', mitReadMeBlueprint, (err) =>
            err ? console.log(err) : console.log('success'));
            break;
        case 'Appache 2.0':
            answers.license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            let appacheReadMeBlueprint = readMeBlueprint(answers)
            fs.writeFile('README.md', appacheReadMeBlueprint, (err) =>
            err ? console.log(err) : console.log('success'));
            break;
        case 'ISC':
            answers.license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            let iscReadMeBlueprint = readMeBlueprint(answers)
            fs.writeFile('README.md', iscReadMeBlueprint, (err) =>
            err ? console.log(err) : console.log('success'));
            break;
        case 'Mozilla':
            answers.license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            let mozillaReadMeBlueprint = readMeBlueprint(answers)
            fs.writeFile('README.md', mozillaReadMeBlueprint, (err) =>
            err ? console.log(err) : console.log('success'));
            break;
    };
    
})
.catch((error) => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment")
    } else {
        console.log('Something else went wrong')
    }
})

