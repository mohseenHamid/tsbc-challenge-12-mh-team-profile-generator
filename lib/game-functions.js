// npm packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// calling in variables from other files
const {
	menuQuestion,
	managerQuestions,
	engineerQuestions,
	internQuestions
} = require("./questions");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const { writeToFile } = require("./write-to-file");
const render = require("../src/page-template");

// create a team array in global scope to capture employee objects from the user response data
const teamArray = [];

// calls the writeToFile ftn to close the app
function quit() {
	// define the file name param for the writeToFile ftn
	const OUTPUT_DIR = path.resolve(__dirname, "../output");
	const outputPath = path.join(OUTPUT_DIR, "team.html");

	// define the content param for the writeToFile ftn
	const renderResult = render(teamArray);

	// call the writeToFile ftn
	writeToFile(outputPath, renderResult);
}

// function for menu prompt
function getMenu() {
	// prompt the user to choose an option from the menu
	return inquirer.prompt(menuQuestion).then((response) => {
		// edit the response format to make it suitable for the switch statement
		let choice = response.choice.toLowerCase();

		switch (choice) {
			case "manager":
				console.log("selected manager");
				getManagerDetails();
				break;
			case "engineer":
				console.log("selected engineer");
				getEngineerDetails();
				break;
			case "intern":
				getInternDetails();
				break;
			case "finish building the team":
				quit();
				break;
		}
	});
}

// function for manager prompts
function getManagerDetails() {
	// inform the user which employee type they're inputting details for
	console.log("Please enter the Manager's details");

	// prompt the user for the employee's details
	return inquirer.prompt(managerQuestions).then((response) => {
		// create manager object based on user inputs
		const employeeObj = new Manager(
			response.name,
			response.id,
			response.email,
			response.officeNumber
		);

		// push the employee object to the global teamArray
		teamArray.push(employeeObj);

		// return back to the menu
		getMenu();
	});
}

// function for engineer prompts
function getEngineerDetails() {
	// inform the user which employee type they're inputting details for
	console.log("Please enter the Engineer's details");

	// prompt the user for the employee's details
	return inquirer.prompt(engineerQuestions).then((response) => {
		// create engineer object based on user inputs
		const employeeObj = new Engineer(
			response.name,
			response.id,
			response.email,
			response.gitHub
		);

		// push the employee object to the global teamArray
		teamArray.push(employeeObj);

		// return back to the menu
		getMenu();
	});
}

// function for intern prompts
function getInternDetails() {
	// inform the user which employee type they're inputting details for
	console.log("Please enter the Intern's details");

	// prompt the user for the employee's details
	return inquirer.prompt(internQuestions).then((response) => {
		// create intern object based on user inputs
		const employeeObj = new Intern(
			response.name,
			response.id,
			response.email,
			response.school
		);

		// push the employee object to the global teamArray
		teamArray.push(employeeObj);

		// return back to the menu
		getMenu();
	});
}

module.exports = { teamArray, getManagerDetails };
