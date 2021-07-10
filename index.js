var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employeetracker",
});

const inquirer = require("inquirer");
let responses = [];