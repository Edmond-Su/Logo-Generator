//Packages required
const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes.js")

const filepath = "./examples/"


//Array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter text for logo: (Must not be more than 3 characters.)",
        name: "text",
    },
    {
        type: "input",
        message: "Enter a text colour:",
        name: "textColour",
    },
    {
        type: "list",
        message: "Select a background shape:",
        name: "shape",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        message: "Enter a shape colour:",
        name: "shapeColour",
    },
]

function writeToFile(filelocation, data) {
    fs.writeFile(filelocation, data, (err) => err ? console.log(err) : console.log("logo.svg has been generated"))
}


function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers)
            const logo = generateLogo(answers)
            writeToFile(filepath, logo)
        })
}

init()