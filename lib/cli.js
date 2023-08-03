const inquirer = require("inquirer");
const fs = require("fs");
const svg = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");

class CLI {
    run() {
        return inquirer
            .prompt([
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
            ])
            .then(({ text, textColour, shapeType, shapeColour }) => { })
            .then(() => { })
            .catch(() => { });
    }
}

module.exports = CLI;