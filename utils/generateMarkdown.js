function renderLicenseBadge(license) {
  if (!license || license === "No license") {
    return "![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)";
  }
  return "";
}

function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

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
