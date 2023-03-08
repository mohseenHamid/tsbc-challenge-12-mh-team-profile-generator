const fs = require("fs");

// function to write HTML file
const writeToFile = (fileName, fileContent) => {
	fs.writeFile(fileName, fileContent, (err) =>
		err
			? console.log(err)
			: console.info(`
-------------------------------------------- Thank You! ---------------------------------------------
Your team portfolio page has been successfully created! I hope you found it to be a smooth process!
`)
	);
};

module.exports = { writeToFile };
