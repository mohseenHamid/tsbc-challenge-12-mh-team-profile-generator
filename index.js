// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const { info } = require("console");
const { welcomeMsg } = require("./lib/welcome-msg");
// const { writeToFile } = require("./lib/write-to-file");
// const render = require("./src/page-template.js");
// const { teamArray, getManagerDetails } = require("./lib/game-functions");
const { getManagerDetails } = require("./lib/game-functions");

/* 
--- TASK: Write Code to gather information about the development team members, and render the HTML file ---

--- game-functions PAGE ---
- create an empty team array in the global scope
	- pass the employee objects from the inquirer responses into the "teamArray" array
	- pass the "teamArray" array into the render function and assign it to a variable called renderResult
	- the render function will render the HTML and call the generateTeam ftn with the "team" array as its argument
	- renderResult will be the content input for the writeToFile ftn
- Inquirer ftns
	- write ftns for each employee type to prompt user for details
		- the "then" for each employee type ftn should create the respective employee object (using employee type's class) based on the response data
		- the employee object should be pushed to the global team array (that's later fed into the render ftn)
		- call the menu ftn in the "then" section to return to menu upon completion
	- write a menu ftn that prompts the user to select a move
		- selecting an employee type should call that employee type ftn
- write a quit ftn that stops the game if the "Finish building team" menu option is selected

--- index.js PAGE ---
- requirements
	- welcomeMsg
	- teamArray
	- getManagerDetails ftn
	- render
	- writeToFile
- write a init() ftn
	- displays the welcome message
	- initiates the app by calling the manager ftn
	- calls the writeToFile ftn at the end
		- the renderResult ftn from the game-functions page will be the content argument
- call the init ftn
 */

// function call to initialize program
function init() {
	console.info(welcomeMsg);

	getManagerDetails();

	// // define the file name param for the writeToFile ftn
	// const OUTPUT_DIR = path.resolve(__dirname, "./output");
	// const outputPath = path.join(OUTPUT_DIR, "team.html");

	// // define the content param for the writeToFile ftn
	// const renderResult = render(teamArray);

	// // call the writeToFile ftn
	// writeToFile(outputPath, renderResult);
}

init();
