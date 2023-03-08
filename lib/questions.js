// array of menu question(s)
const menuQuestion = [
	{
		type: "list",
		message: "Please select an option from the menu",
		name: "choice",
		choices: ["Engineer", "Intern", "Finish building the team"]
	}
];

// array of shared qs for each employee type
const sharedQs = [
	{
		type: "input",
		message: "Please enter the employee's name:",
		name: "name"
		// The input can't be empty
		// validate: (userInput) => userInput.trim()
	},
	{
		type: "input",
		message: "Please enter the employee's id:",
		name: "id"
		// The input can't be empty
		// validate: (userInput) => userInput
	},
	{
		type: "input",
		message: "Please enter the employee's email address:",
		name: "email"
		// The input can't be empty
		/* 		validate: (userInput) =>
			userInput.trim().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) */
	}
];

// array of questions for manager details
const managerQuestions = [
	...sharedQs,
	{
		type: "input",
		message: "Please enter the manager's office number:",
		name: "officeNumber"
		// The input can't be empty
		// validate: (userInput) => userInput
	}
];

// array of questions for engineer details
const engineerQuestions = [
	...sharedQs,
	{
		type: "input",
		message: "Please enter the engineer's gitHub username:",
		name: "gitHub"
		// The input can't be empty
		/* validate: (gitHub) => {
			return (
				gitHub.trim() &&
				gitHub.trim().charAt(0) !== "-" &&
				gitHub.trim().charAt(gitHub.length) !== "-" &&
				/^[a-zA-Z0-9]+$/.test(gitHub.trim())
			);
		} */
	}
];

// array of questions for intern details
const internQuestions = [
	...sharedQs,
	{
		type: "input",
		message: "Please enter the intern's school name:",
		name: "school"
		// The input can't be empty
		// validate: (userInput) => userInput.trim()
	}
];

module.exports = {
	menuQuestion,
	managerQuestions,
	engineerQuestions,
	internQuestions
};
