const Employee = require("../lib/Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.role = "Manager";

		if (officeNumber) {
			this.officeNumber = officeNumber;
		} else {
			throw new Error("Please enter an office number");
		}
	}

	getOfficeNumber() {
		return this.officeNumber;
	}
}

const me = new Manager("Mohseen", 123, "mhsn@hotmail.com", 23);
console.log(me.getRole());

module.exports = Manager;
