// DEPENDENCIES (Or Plugins--------***** section in Anatomy of an Express Server
require('dotenv').config();
// console.log(process.env)

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/db');
const passport = require('passport');

// Express session
const expressSession = require('express-session')({
  secret: 'hermit#9',
  resave: false,                                        // don't save session if unmodified
  saveUninitialized: false,                             // don't create session until something is stored
})

// Import the User Model or Schema
const ClientRegister = require('./models/entries');

// Importing Route files
const calcroute = require('./routes/calcroute');
const { exists } = require('./models/entries');

// INSTANTIATIONS----------------****** section in Anatomy of an Express Server
const app = express();

// SetUp Database Connections
mongoose.connect(config.database, { useNewUrlParser: true});
const db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB now');
});

// Check for db errors
db.on('error', function(err){
  console.error(err);
});

// CONFIGURATIONS-------------------**** section in Anatomy of an Express Server
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession);

// ROUTES---------------------------**** section in Anatomy of an Express Server
app.use('/', calcroute);

app.get('/', (req, res) => {
  res.send('Welcome home. This is Cohort 12, mbu!');
})

app.get('/index', (req, res) => {
  res.render('index');
})

app.get('*', (req, res) => {
  res.send("404! Sorry the page you're looking for does not exists.")
})

// BOOTSTRAPPING SERVER--------------***section in Anatomy of an Express Server
// const PORT = 4000;
// const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => console.log(`Elders are listening on ${HOST}:${PORT}`));
