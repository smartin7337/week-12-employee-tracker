
DROP DATABASE IF EXISTS employeetracker;
CREATE DATABASE employeetracker;
USE employeetracker;

CREATE TABLE department (
   id int NOT NULL AUTO_INCREMENT,
   name VARCHAR(30) NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE role (
   id int NOT NULL AUTO_INCREMENT,
   title VARCHAR(30) NOT NULL,
   salary DECIMAL NOT NULL,
   department_id int NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
   id int NOT NULL AUTO_INCREMENT,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_id int NOT NULL,
   manager_id int,
   PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

INSERT INTO department(`name`)
VALUES ("Engineering");

INSERT INTO department(`name`)
VALUES ("HR");

INSERT INTO role(`title`,`salary`,`department_id`)
VALUES ("Nerd", 300, 1);

INSERT INTO employee(`first_name`,`last_name`,`role_id`)
VALUES ("Stacy", "McJenkins", 1);