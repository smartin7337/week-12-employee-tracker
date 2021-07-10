var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employeetracker",
});

const inquirer = require("inquirer");
let responses = [];

const questions = [
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        { name: "Add a department", value: "addDepartment" },
        { name: "Add a role", value: "addRole" },
        { name: "Add an employee", value: "addEmployee" },
        { name: "View departments", value: "viewDepartments" },
        { name: "View roles", value: "viewRoles" },
        { name: "View employees", value: "viewEmployees" },
        { name: "Update employee roles", value: "updateRoles" },
      ],
    },
    {
      type: "input",
      name: "deptName",
      message: "What name?",
      when(answers) {
        return answers.choice == "addDepartment";
      },
    },
    {
      type: "input",
      name: "roleName",
      message: "What name?",
      when(answers) {
        return answers.choice == "addRole";
      },
    },
    {
      type: "list",
      name: "roleDept",
      message: "What department?",
      choices: function () 
    }
    