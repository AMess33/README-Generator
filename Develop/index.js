// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { profile } = require('console');
const { transferableAbortSignal } = require('util');

// create function for README page content
const generateFile = ({project, description, motivation, why, problem, repo, tests, learn, install, usage, partner, license, profile, email}) => 
`
# <${project}>
## ${description}
- ${motivation}
- ${why}
- ${problem}
- ${learn}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${install}

## Usage
[${project} Webpage](${repo})

${usage}

## Credits

${partner} [GitHub Profile](https://github.com/${partner}) 

## License
${license}


## Tests
${tests}

## Questions

[GitHub Profile](https://github.com/${profile})
E-Mail: ${email}
`


// Create inquirer prompt questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'project',
      message: 'What is the title of your Project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a short description of your project?',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation?',
    },
    {
      type: 'input',
      name: 'why',
      message: 'Why did you build this project?',
    },
    {
      type: 'input',
      name: 'problem',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'learn',
      message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide a step-by-step description of how to get the development environment running.',
    },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for the use of your project',
    },
      {
        type: 'confirm',
        name: 'collaborator',
        message: 'Do you have any collaborators on this project?',
    },
    {   
        type: 'input',
        name: 'partner',
        message: 'What is your collaborator\'s GitHub username?',
        when: (answers) => answers.collaborator === true,

    },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What Licenses are used with this project? Use the arrows to navigate and the SPACE bar to make selections',
        choices: ['MIT License', 'GNU GPLv3', 'Apache', 'Other', 'No Licenses Used'],
    },
      {
        type: 'input',
        name: 'tests',
        message: 'Write a test for your application and provide examples of how to run them.',
    },
      {
        type: 'input',
        name: 'profile',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the best email address to contact you about questions regarding this project?',
    },
    {
      type: 'input',
      name: 'repo',
      message: 'What is the URL for the deployed webpage of this project?'
    }
  ])

  .then((answers) => {
    const pageContent = generateFile(answers);
// Create README file
    fs.writeFile('README.md', pageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
