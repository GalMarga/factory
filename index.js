// index.js
const express = require('express');
const cors = require('cors');
const userController = require('./contollers/userController')
const empController = require('./contollers/empController')
const depController = require('./contollers/depController')
const shiftsController = require('./contollers/shiftsController')
const addNewEmp = require('./contollers/shiftsController')

const http = require('http')
const path = require('path')
const bodyParser = require('body-parser');

// const show = require('./models/emp')


const portListen = process.env.PORT || 3000;

require('./configs/connectDB')

const app = express();
const loginRouter = require('./contollers/logInController')


app.set('views', path.join(__dirname, 'views'))
// app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'models')));
app.use(express.static(path.join(__dirname, 'models/emp')));
app.use(express.static(path.join(__dirname, 'models/dep')));
app.use(express.static(path.join(__dirname, 'models/user')));



app.use(express.static('js'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/user', userController)
app.use('/employees', empController)
app.use('/department', depController)
app.use('/shifts', shiftsController)
app.use('/', loginRouter) 
// app.use('/addNewEmp', empController) 


app.get('/deshboard', (req, res) => { 
    res.render('deshboard');
});

app.get('/employeespage', (req, res) => {
  res.render('employeespage');
});

app.get('/departmentspage', (req, res) => {
  res.render('departmentspage');
});

app.get('/shiftspage', (req, res) => {
  res.render('shiftspage');
});

app.get('/addNewEmp', (req, res) => {
  res.render('addNewEmp');
});

app.get('/editemp', (req, res) => {
  res.render('editemp');
});

app.get('/addnewdep', (req, res) => {
  res.render('addNewDep');
});
app.get('/search', (req, res) => {
  res.render('search');
});
app.get('/add-shift-emp', (req, res) => {
  res.render('add-shift-emp');
});


const server = http.createServer(app);
server.listen(portListen)