// logInController.js
const express = require('express')
const bodyParser = require('body-parser');
const Users = require('../models/user/userSchema');
const router = express.Router();
const fs = require('fs');

let fullName = ""

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', bodyParser.urlencoded({ extended: false }), async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let user = await Users.findOne({ userName: username, pass: password, });
  if (user) {
    console.log(user.userName);
    console.log(user.pass);

    fullName = user.fullName
  
    localStorage()
   
    res.redirect('/deshboard');

  } else {
    res.redirect('/');
  }
});

function localStorage() {

  console.log("login", fullName);

}


module.exports = router;

 