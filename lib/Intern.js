const Employee = require("../lib/Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.role = "Manager";

		if (officeNumber) {
			this.officeNumber = officeNumber;
		} else {
			throw new Error("Please enter an office number");
		}
	}
}

module.exports = Intern;
