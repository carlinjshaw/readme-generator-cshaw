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
      type: 'list',
      message: 'Which license would you like to use?',
      name: 'license',
      choices: [
        "MIT License",
        "Apache 2.0 License",
        "Boost Software License 1.0",
        "BSD 3-Clause License",
        "BSD 2-Clause License"
      ]
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
  console.log(data)

  //put data object into an array
  data = [data]
  //create text for each licensure 
  var mitLicense = "The MIT License is short and to the point. It lets people do almost anything they want with your project, like making and distributing closed source versions."
  var apacheLicense = "The Apache License is a permissive free software license written by the Apache Software Foundation. It allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties. The ASF and its projects release their software products under the Apache License. The license is also used by many non-ASF projects"
  var boostLicense = "The Boost Software License is an open-source license used by the Boost C++ Libraries. It is also a popular license for a significant number of other open source C++ projects. It is a permissive license in the style of the popular BSD license and MIT license. The license has been OSI-approved since February 2008. According to the Free Software Foundation, it qualifies as a free software license, and is compatible with the GNU General Public License."
  var bsdThree = "1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer." +
    "2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution." +
    "3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.";
  var bsdTwo = "1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer." + 
    "2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution."
// variables for the images of th ebadges for the licensures
var mitImg = "https://img.shields.io/badge/license-MIT-green"
var apacheImg = "https://img.shields.io/badge/license-Apache-blue"
var boostImg = "https://img.shields.io/badge/license-boost-orange"
var bsdthreeImg = "https://img.shields.io/badge/license-bsd3-yellow"
var bsdtwoImg = "https://img.shields.io/badge/license-bsd2-purple"
  console.log(data)
  
  

  //create if statements that consider the value entered from user for license
  if (data[0].license === "MIT License") {
    data = [...data, mitLicense, mitImg];
  } else if (data[0].license === "Apache 2.0 License") {
    data = [...data, apacheLicense, apacheImg];
  } else if (data[0].license === "Boost Software License 1.0") {
    data = [...data, boostLicense,boostImg];
  } else if (data[0].license === "BSD 3-Clause License") {
    data = [...data, bsdThree, bsdthreeImg];
  } else if (data[0].license === "BSD 2-Clause License") {
    data = [...data, bsdTwo, bsdtwoImg];
  }
  
  // var mitImg = image: 'https://img.shields.io/badge/license-MIT-green';

  // console.log(<img src = "https://img.shields.io/badge/license-MIT-green"></img>)

  const generatedString = markDown(data);
  
    fs.writeFile(data[0].title + '.md', generatedString, function(err){
        if (err) {
            return console.log(err);
        }
    })

})


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
