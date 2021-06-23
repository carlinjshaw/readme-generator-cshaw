// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown')

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
    {
      type: 'input',
      message: 'How are people going to install what they need to?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is the usage of this project?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What guidelines should contributors follow?',
      name: 'guidelines',
    },
    {
      type: 'input',
      message: 'How are people going to test this?',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email that people can contact you at?',
      name: 'email',
    }
    

  ])
// TODO: Create a function to write README file
.then(function(data){

    console.log(data.title)

    const generatedString = markDown(data);




    fs.writeFile(data.title + '.md', generatedString, function(err){
        if (err) {
            return console.log(err);
        }
    })
})



// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
