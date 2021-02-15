// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const util = require('util');

// TODO: Create an array of questions for user input
// const writeFileAsync = util.promisify(fs.writeFile);

inquirer
  .prompt([
    {
      type: "input",
      name: "Title",
      message: "What is the title of your README?",
    },
    {
      type: "input",
      name: "Description",
      message: "Please provide a short description of your application.",
    },
    {
      type: "input",
      name: "Installation",
      message:
        "Provide any relevant installation instructions for your application",
    },
    {
      type: "input",
      name: "Usage",
      message: "What is this application going to be used for?",
    },
    {
      type: "list",
      choices: ["Apache", "MIT", "BSD 3"],
      name: "License",
      message: "Which license does this application require (Use Arrow Keys then press Enter)",
    },
    {
      type: "input",
      name: "Contribution",
      message: "Are there any contribution guidelines?",
    },
    {
      type: "input",
      name: "Tests",
      message: "Are there any test instructions?",
    },
    {
      type: "input",
      name: "Github",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "Email",
      message: "What is a good Email to reach you at?",
    },
  ])
  .then((answers) => {
    const {
      Title,
      Description,
      Installation,
      Usage,
      License,
      Contribution,
      Tests,
      Github,
      Email,
    } = answers;
    let badge = (license) => {
      // const license = license
      let badge;
      switch (license) {
        case "Apache":
          badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
          break;
        case "MIT":
          badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
          break;
        case "BSD 3":
          badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
          break;
      }
      return badge
    }
    const README = `# ${Title}
    
## Badge
${badge(License)}

## Description
${Description}

## Table of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contribution](#Contribution)
[Tests](#Tests)
[Questions](#Questions)
    
## Installation
${Installation}
    
## Usage
${Usage}
    
## License
${License}
    
## Contribution
${Contribution}
    
## Tests
${Tests}

## Questions
https://github.com/${Github}
You can reach me at the following email with any additional questions you may have: ${Email}`

    console.log("Your Answers: ");
    console.log(answers);
    fs.writeFile("README.md", README, (err) => {
      if (err) {
        throw err;
      } else {
        console.log("The file has been saved!");
      }
    });
  });
