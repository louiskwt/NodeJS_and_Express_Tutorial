// GLOBAL object -- no window

// __dirname - path to current dir
console.log(__dirname);

// __filename - file name
console.log(__filename);
// require - function to use modules (Common JS)
console.log(require);
// module - info about current modul (file)
console.log(module);

module.exports = sum = function sum(a, b) {
	return a + b;
};

console.log(module);

// process - info about env where the program is being executed
console.log(process);
