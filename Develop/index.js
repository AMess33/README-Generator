// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// create function for README page content
const generateFile = ({project, description, motivation, why, problem, learn}) => 
`# <${project}>
## ${description}
- ${motivation}
- ${why}
- ${problem}
- ${learn}
## Table of Contents 
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
## Usage
[Node README Repository](https://github.com/AMess33/NodeREADME)
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
    // {
    //     type: 'input',
    //     name: '',
    //     message: '',
    // },
    //   {
    //     type: 'input',
    //     name: '',
    //     message: '',
    // },
    //   {
    //     type: 'input',
    //     name: '',
    //     message: '',
    // },
    //   {
    //     type: 'input',
    //     name: '',
    //     message: '',
    // },
    //   {
    //     type: 'input',
    //     name: '',
    //     message: '',
    // },
  ])

  .then((answers) => {
    const pageContent = generateFile(answers);
// Create README file
    fs.writeFile('README.md', pageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
