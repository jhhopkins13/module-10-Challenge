const inquirer = require('inquirer');

// Function to mock user input for testing purposes
function mockInput(answers) {
  inquirer.prompt = jest.fn().mockResolvedValue({ ...answers });
}

module.exports = mockInput;
