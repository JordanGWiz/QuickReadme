// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
${renderLicenseBadge(data.license)}

## Description
${data.projectDescription}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contribution](#contribution)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Contribution
${data.contribution}

## Tests
${data.test}

## License
This project is licensed under the ${data.license}.

## Questions
If you have any questions, don't hesitate to reach out to me at [${
    data.email
  }](mailto:${data.email}). You can also find more of my work at [github.com/${
    data.userName
  }](https://github.com/${data.userName}).
`;
}

module.exports = generateMarkdown;
