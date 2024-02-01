//departmentSchema.js
const mongoose = require('mongoose')

let appSchema = mongoose.Schema

const DepartmentSchema = new mongoose.Schema({
      idDep: String,
      name: String,
      Manager: String
    }, { versionKey: false });
    
    module.exports = mongoose.model('department', DepartmentSchema, 'department');