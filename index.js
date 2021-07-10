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
    var c = [{}];
      connection.query(
        "SELECT * FROM `department`;",
        function (error, results, fields) {
          if (error) throw error;
          c = results;
        }
      );
      return c;
    },
    when(answers) {
      return answers.choice == "addRole";
    },
  },
];
const confirm = [
  {
    type: "confirm",
    name: "askAgain",
    message: "Would you like to do something else?",
    default: true,
  },
];

function addDepartment(name) {
  connection.query(
    'INSERT INTO `department` (`name`) VALUES ("' + name + '");',
    function (error, results, fields) {
      if (error) throw error;
    }
  );
}
  function viewDepartments() {
    connection.query(
      "SELECT * FROM `department`;",
      function (error, results, fields) {
        if (error) throw error;
        console.table(results);
      }
    );
  }
  function viewRoles() {
    connection.query("SELECT * FROM `role`;", function (error, results, fields) {
      if (error) throw error;
      console.table(results);
    });
  }
  function viewEmployees() {
    connection.query(
      "SELECT * FROM `employee`;",
      function (error, results, fields) {
        if (error) throw error;
        console.table(results);
      }
    );
  }
  
  function ask() {
    inquirer.prompt(questions).then((answers) => {
      //  model for things working:
      if (answers.choice == "addDepartment") {
        addDepartment(answers.deptName);
      }
      if (answers.choice == "viewDepartments") {
        viewDepartments();
      }
  
      if (answers.choice == "viewRoles") {
        viewRoles();
      }
      if (answers.choice == "viewEmployees") {
        viewEmployees();
      }
  
  // creates a function to initialize app
function init() {
    ask();
  }
  
  // call to initialize app
  init();
  
  //export
  module.exports = {
    init,
  };