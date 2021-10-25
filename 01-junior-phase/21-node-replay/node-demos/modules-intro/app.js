/*************** 1. Global & Module Variables *****************/
// Module variables: __dirname, __filename, module
// console.log(__dirname)
// console.log(__filename)
// console.log(module)

// Global variables: process, global, console
//console.log(Object.keys(console))
/*************** 2. Importing & Exporting Modules *************/
const moduleA = require("./moduleA")
const {demoFunction, month} = require("./moduleB")
const chalk = require("chalk")

console.log(chalk.blue(moduleA()))
console.log(demoFunction())
//console.log(month)

/*************** 3. NPM ***************************************/
// 1. npm init
