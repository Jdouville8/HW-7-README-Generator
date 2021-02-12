// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');

// TODO: Create an array of questions for user input
// const writeFileAsync = util.promisify(fs.writeFile);

 inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your README?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Please provide a short description of your application.',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Provide any relevant installation instructions for your application',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'What is this application going to be used for?',
    },
    {
      type: 'input',
      name: 'License',
      message: 'Which license does this application require',
    },
    {
      type: 'input',
      name: 'Contribution',
      message: 'Are there any contribution guidelines?',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Are there any test instructions?',
    },
  ]).then((answers) => {
    console.log(answers);
  })


// const {}

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();