// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      message: 'Provide a description of your project',
      name: 'description',
    },
  ])
// TODO: Create a function to write README file
.then(function(data){
  console.log(data.title)
})
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
