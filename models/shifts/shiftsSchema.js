// // Shift Schema

const mongoose = require('mongoose')

const ShiftSchema = new mongoose.Schema({
  employeesName: String,
  departemntName: String,
  idEmp: String,
  time: String,
  shift: String,
  startTime: String,
  endTime: String,

}, { versionKey: false });

module.exports = mongoose.model('shifts', ShiftSchema, 'shifts');