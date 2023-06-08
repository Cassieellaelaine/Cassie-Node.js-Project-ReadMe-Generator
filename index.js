// TODO: Include packages needed for this application
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const markdown = require("./potential-enigma/utils/generateMarkdown");

// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
    {   
        message: "What is the name of the project?",
        name: "title"
    },
    {   
        message: "Please provide a table on content",
        name: "table of content"
    },
    {   
        message: "What is the name of the user?",
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
        message: "What licenses are required with this project?",
        name: "licenses"
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
])
}
i


init();


// TODO: Create a function to initialize app

function init () {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("Making ReadMe");

// TODO: Create a function to write README file
fs.writeToFile("ReadMe.md", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}

init();

const userName = questions.userName

axios.get(`https://api.github.com/users/${userName}`)
.then(questions => {
  console.log(questions.data);
});


