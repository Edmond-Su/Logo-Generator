const inquirer = require("inquirer");
const fs = require("fs");
const {generateSVG} = require("./svgGenerator");
const SVGLogo = require("./shapes");

class CLI {
    run() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter text for logo: (Must not be more than 3 characters.)",
                    name: "text",
                    validate: text => text.length > 0 && text.length <=3
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
                    choices: ["Circle", "Triangle", "Square"]
                },
                {
                    type: "input",
                    message: "Enter a shape colour:",
                    name: "shapeColour",
                },
            ])
            .then( ( response ) => { generateSVG( response ) } )
            .then( () => console.log( "Generated logo.svg" ) )
            .catch( (err) => {
                console.log( err) 
                console.log( "Error has occured." )
            });
    }
}

module.exports = CLI;