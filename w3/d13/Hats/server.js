const express = require("express");
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tempStackHatsDB', {useNewUrlParser: true});


app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/HatApp/dist/HatApp")); //change to angular
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./server/config/routes.js')(app)

app.listen(8000, () => console.log("listening on port 8000"));