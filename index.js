const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//Array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is the tilte of your project?",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "How would you describe the project in a few short sentences?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this project?",
  },
  {
    type: "input",
    name: "credits",
    message: "Who helped credit this application?",
  },
  {
    type: "list",
    name: "contribution",
    choices: [
      "Please reach out to the author if you would like to contribute to this project and discuss the contribution guidelines.",
      "No contributions are being accepted at this time.",
    ],
    message: "How can others contribute to this project?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the test instructions?",
  },
  {
    type: "list",
    name: "license",
    choices: [
      "GNU GPLv3",
      "Apache License 2.0",
      "MIT License",
      "BSD 3-Clause",
      "No license",
    ],
    message: "Which license would you like to use for your project?",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// Write README file
function writeToFile(fileName, data) {
  const filePath = path.resolve(process.cwd(), fileName);
  return fs.writeFileSync(filePath, data);
}

// Initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Created README.md file...");
    writeToFile("./QuickReadme/README.md", generateMarkdown({ ...responses }));
  });
}

// Function call to initialize app
init();
