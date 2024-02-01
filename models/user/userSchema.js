const mongoose = require('mongoose')

let appSchema = mongoose.Schema

let UserSchema = new appSchema({
      idEmp: String,
      fullName: String,
      userName: String,
      pass: String,
      numOfActions: Number
}, { versionKey: false })

module.exports = mongoose.model('user', UserSchema, 'user');