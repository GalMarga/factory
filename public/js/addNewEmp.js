// addNewEmp.js
// import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const empSchama = require('models/emp/empSchema.js')
const empSchama = require('models/user/userSchema.js')
const app = express();

console.log("in");
app.use(bodyParser.urlencoded({extended: true}));

// POST route to handle form submission
app.post('/employees', (req, res) => {
  const newEmployee = new Employee(req.body);

  newEmployee.save((err, employee) => {
    if (err) return console.error(err);
    console.log(employee.firstName + " saved to Employees collection.");
    res.redirect('/');

    const newUser = new User(req.body);

  newUser.save((err, employee) => {
    if (err) return console.error(err);
    console.log(user.userName + " saved to Employees collection.");
    res.redirect('/');
  });
});
app.post('/user', (req, res) => {
  
  });
});