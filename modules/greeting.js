// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

module.exports = greeting = (name) => {
	console.log(`Hello there ${name}`);
};

console.log(module);
