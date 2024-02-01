// // Shift Schema

const mongoose = require('mongoose')

const ShiftSchema = new mongoose.Schema({
  idSft: String,
  date: Date,
  startTime: String,
  endTime: String,
  NumOfActions: Number
}, { versionKey: false });

module.exports = mongoose.model('shifts', ShiftSchema, 'shifts');