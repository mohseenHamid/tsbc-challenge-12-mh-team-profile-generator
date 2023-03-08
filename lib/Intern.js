const Employee = require("../lib/Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.role = "Intern";

		if (school.trim()) {
			this.school = school;
		} else {
			throw new Error("Please enter a school");
		}
	}

	getSchool() {
		return this.school;
	}
}

module.exports = Intern;
