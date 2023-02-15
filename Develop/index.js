// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { profile } = require('console');

// create function for README page content
const generateFile = ({project, description, motivation, why, problem, learn, install, usage, collaborator, license, profile, email}) => 
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
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
## Usage
[Node README Repository](https://github.com/AMess33/NodeREADME)
Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an  folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).



## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.


## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

[GitHub Profile](https://github.com/${profile})
[E-Mail:](${email})
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
        type: 'input',
        name: 'collaborator',
        message: '',
    },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What Licenses are used with this project?',
        choices: ['MIT License', 'GNU GPLv3', 'Apache', 'Other', 'No Licenses Used'],
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
  ])

  .then((answers) => {
    const pageContent = generateFile(answers);
// Create README file
    fs.writeFile('README.md', pageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
