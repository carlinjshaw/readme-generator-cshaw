// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data[0].title}

  ${data[0].description}

![myImage](${data[2]})

##Table of Contents:
*Installation
*Usage information
*License
*Contribution guidelines
*Test Instructions
*Questions


###Installation 
${data[0].installation}

###Usage
${data[0].usage}

###License
${data[1]}

###Contributing
${data[0].guidelines}

###Tests
${data[0].test}

###Questions

If you have any questions, you can contact me at my Github: https://github.com/${data[0].github} or at my email: ${data[0].email}
`;
}

module.exports = generateMarkdown;
