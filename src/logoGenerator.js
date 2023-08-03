const inquirer = require('inquirer');
const fs = require('fs');
const { generateSVGCode } = require('./utils/svgUtils');

class LogoGenerator {
  constructor() {
    this.text = '';
    this.textColor = '';
    this.shape = '';
    this.shapeColor = '';
  }

  async promptUser() {
    const questions = [
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: (input) => input.length > 0 && input.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal number):',
        validate: (input) => input.length > 0,
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal number):',
        validate: (input) => input.length > 0,
      },
    ];

    const answers = await inquirer.prompt(questions);
    this.text = answers.text;
    this.textColor = answers.textColor;
    this.shape = answers.shape;
    this.shapeColor = answers.shapeColor;
  }

  generateSVG() {
    const svgCode = generateSVGCode(this.text, this.textColor, this.shape, this.shapeColor);
    fs.writeFileSync('logo.svg', svgCode);
  }
}

module.exports = LogoGenerator;
