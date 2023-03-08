const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const {
	menuQuestion,
	managerQuestions,
	engineerQuestions,
	internQuestions
} = require("./questions");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
// const { info } = require("console");
// const { welcomeMsg } = require("./welcome-msg");
const { writeToFile } = require("./write-to-file");
const render = require("../src/page-template");

// create a team array in global scope to capture employee objects from the user response data
const teamArray = [];

// Logs goodbye and exits the node app
function quit() {
	// define the file name param for the writeToFile ftn
	const OUTPUT_DIR = path.resolve(__dirname, "./output");
	const outputPath = path.join(OUTPUT_DIR, "team.html");

	// define the content param for the writeToFile ftn
	const renderResult = render(teamArray);

	// call the writeToFile ftn
	writeToFile(outputPath, renderResult);

	process.exit(0);
}

// function for menu
function getMenu() {
	return inquirer.prompt(menuQuestion).then((response) => {
		switch (response) {
			case response.toLowerCase().matches("manager"):
				getManagerDetails();
				break;
			case response.toLowerCase().matches("engineer"):
				getEngineerDetails;
				break;
			case response.toLowerCase().matches("intern"):
				getInternDetails();
				break;
			case response.toLowerCase().matches("finish"):
				quit();
				break;
		}
	});
	// // If the user says yes to another game, play again, otherwise quit the game
	// if (val.choice) {
	// 	this.play();
	// } else {
	// 	this.quit();
	// }
}

// function for manager prompts
function getManagerDetails() {
	return inquirer.prompt(managerQuestions).then((response) => {
		const employeeObj = new Manager(
			response.name,
			response.id,
			response.email,
			response.officeNumber
		);

		teamArray.push(employeeObj);

		getMenu();
	});
}

// function for engineer prompts
function getEngineerDetails() {
	return inquirer.prompt(engineerQuestions).then((response) => {
		const employeeObj = new Engineer(
			response.name,
			response.id,
			response.email,
			response.gitHub
		);

		teamArray.push(employeeObj);

		getMenu();
	});
}

// function for intern prompts
function getInternDetails() {
	return inquirer.prompt(internQuestions).then((response) => {
		const employeeObj = new Intern(
			response.name,
			response.id,
			response.email,
			response.school
		);

		teamArray.push(employeeObj);

		getMenu();
	});
}

// --- TEST USING MANUAL DATA ---
// const employee1 = new Manager("Matt", 1, "matt@hotmail.com", 1);
// const employee2 = new Engineer("Harry", 2, "harry@hotmail.com", "harryGit");
// const employee3 = new Engineer("Sally", 3, "sally@hotmail.com", "sallyGit");
// const employee4 = new Intern("Joan", 4, "joan@hotmail.com", "joanSchool");
// teamArray.push(employee1, employee2, employee3, employee4);

module.exports = { teamArray, getManagerDetails };
