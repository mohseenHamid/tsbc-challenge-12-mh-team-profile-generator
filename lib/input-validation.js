// input validation for any generic string response
function validateStr(input) {
	return input.trim() ? true : "Please enter a value";
}

// input validation for officeNumber
function validateNum(num) {
	return !num.match(/[^0-9]/g) ? true : "Please enter a number";
}

// input validation for email
function validateEmail(email) {
	return email.trim().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
		? true
		: "Please enter a valid email address";
}
// input validation for GitHub username
function validateGitHub(gitHub) {
	return gitHub.trim() &&
		gitHub.trim().charAt(0) !== "-" &&
		gitHub.trim().charAt(gitHub.length) !== "-" &&
		/^[a-zA-Z0-9]+$/.test(gitHub.trim())
		? true
		: "Please enter a valid GitHub username";
}

module.exports = {
	validateNum,
	validateStr,
	validateEmail,
	validateGitHub
};
