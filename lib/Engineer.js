const Employee = require("../lib/Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
	constructor(name, id, email, gitHub) {
		super(name, id, email);
		this.role = "Engineer";

		if (
			gitHub.trim() &&
			gitHub.trim().charAt(0) !== "-" &&
			gitHub.trim().charAt(gitHub.length) !== "-" &&
			/^[a-zA-Z0-9]+$/.test(gitHub.trim())
		) {
			this.gitHub = gitHub.trim();
		} else {
			throw new Error("Please enter a valid GitHub username");
		}
	}

	getGitHub() {
		return this.gitHub;
	}
}

// const me = new Engineer("Mohseen", 123, "mhsn@hotmail.com", "mohseenHamid");
// console.log(me);

module.exports = Engineer;
