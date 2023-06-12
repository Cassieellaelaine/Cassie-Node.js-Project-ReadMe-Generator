// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([

    {
        type: "input",
        message: "What is the name of the project?",
        name: "title"
    },
    {
        message: "Provide a table of content",
        name: "table of content"
    },
    {
        message: "What is your name",
        name: "userName"
    },
    {
        message: "Please provide a description of the project",
        name: "description"
    },
    {
        message: "What is the installation process?",
        name: "installation"
    },
    {
        message: "How will this project be used?",
        name: "usage"
    },
    {
        message: "Choose a license",
        name: "license",
        type: "list",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "no license"]
    },
    {
        message: "Who were the contributors to this project?",
        name: "contribution"
    },
    {
        message: "What is the test process for this project?",
        name: "test"
    },
    {
        message: "What is the user github email address?",
        name: "GitHub user email"
    }
]);
}

// TODO: Create a function to initialize app
// Async function using util.promisify 
async function init() {
    try {
        // Ask the user questions and generate the responses
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        // Write new README.md
        await writeFileAsync('README.md', generateMarkdown);
        console.log('Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  

init();