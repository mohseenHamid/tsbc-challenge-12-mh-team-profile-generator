// TODO: Write code to define and export the Employee class

class Employee {
	constructor(name, id, email) {
		if (name.trim()) {
			this.name = name;
		} else {
			throw new Error("Please enter a name");
		}

		if (id) {
			this.id = id;
		} else {
			throw new Error("Please enter an ID");
		}

		if (email.trim().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
			this.email = email;
		} else {
			throw new Error("Please enter a valid email");
		}

		this.role = "Employee";
	}

	getName() {
		return this.name;
	}

	getId() {
		return this.id;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		return this.role;
	}
}

// const me = new Employee("Mohseen", 123, "mhsn@hotmail.com");
// console.log(me);

module.exports = Employee;
