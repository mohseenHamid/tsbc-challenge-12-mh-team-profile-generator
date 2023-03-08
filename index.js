// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const { info } = require("console");
// const { welcomeMsg } = require("./lib/welcome-msg");
// const { writeToFile } = require("./lib/write-to-file");
// const render = require("./src/page-template.js");

const { init } = require("./lib/game-functions");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

/* 
--- TASK: Write Code to gather information about the development team members, and render the HTML file ---

--- APP STEPS ---
- create an empty team array in the global scope
	- pass the employee objects from the inquirer responses into the "teamArray" array
	- pass the "teamArray" array into the render function and assign it to a variable called renderResult
	- the render function will render the HTML and call the generateTeam ftn with the "team" array as its argument
	- renderResult will be the content input for the writeToFile ftn in the index.js page
		- need to export renderResult from the game-functions page

- write ftns for each employee type to prompt user for details

--- index.js PAGE ---
- write a init() ftn in the index.js page
	- displays the welcome message
	- initiates the app by calling the game ftn
	- calls the writeToFile ftn
		- the renderResult ftn from the game-functions page will be the content argument
 */

// function call to initialize program
init();
