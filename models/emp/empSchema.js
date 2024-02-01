
const mongoose = require('mongoose')

// Employee Schema
const EmployeeSchema = new mongoose.Schema({
    // empId: String,
    firstName: String,
    lastName:  String,
    startYear:  String,
    departmentID:  String,
    userName: String,
    password: String,
  }, { versionKey: false });
  
  module.exports = mongoose.model('employees', EmployeeSchema);

