// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter the project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter the usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please enter the contribution guidelines:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please enter the test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license for this application:',
      choices: [
          "Apache",
          "BSD",
          "GNU",
          "IBM",
          "MIT"
      ]
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'name',
      message: 'Please enter your full name:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email adress:',
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readMeContent = generateMarkdown(answers);
        writeToFile("README.md", readMeContent);
    });
}

// Function call to initialize app
init();
