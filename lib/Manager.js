const Employee = require("../lib/Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.role = "Manager";
	}
}

const me = new Employee("Mohseen", 123, "mhsn@hotmail.com");
console.log(me);

module.exports = Manager;
