// this constructor organises the information from the users input through inquirer 

class SVGLogo {
    constructor(text, textColour, shape, shapeColour) {
        this.text = text;
        this.textColour = textColour;
        this.shape = shape;
        this.shapeColour = shapeColour;
    }
  
  //   this render function marksup the svg file relative to the users input 
    render = () => {
        let svgMarkup = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  
      // the if conditional check as to what shape the user has chosen and thus uses the correct SVG parameters for that shape 
      if (this.shape === "Circle"){
          svgMarkup += `<circle cx="50" cy="50" r="45" fill="${this.shapeColour}" />`;
      }
  
      if (this.shape === "Triangle") {
        svgMarkup += `<polygon points="50,5 5,95 95,95" fill="${this.shapeColour}" />`;
      }
      if (this.shape === "Square") {
        svgMarkup += `<rect width="100" height="100" fill="${this.shapeColour}" />`;
      }
  
      //we add a centered text element and its colour input
      svgMarkup += `<text x="50" y="50" fill="${this.textColour}" text-anchor="middle" dominant-baseline="central" font-size="20">${this.text}</text>`;
  
      // closing svg statement
      svgMarkup += "</svg>";
  
      return svgMarkup;
    };
  }

  module.exports = SVGLogo;