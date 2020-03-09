const express = require("express");
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tempStackDb', {useNewUrlParser: true});

const NinjaSchema = new mongoose.Schema({
   name: String,
   age: Number
})

const Ninja = mongoose.model('Ninja', NinjaSchema);




app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/ninja', (req,res)=>{
   Ninja.findOne({name:'carl'})
   .then(data => console.log(data))
   .catch(err => console.log('err:', err))
   res.render('newninja')
})
app.post('/ninja', (req,res) =>{
   const ninja = new Ninja();
   // console.log(req)
   ninja.name = req.body.name
   ninja.age = req.body.age
   ninja.save()
      .then( ninjaData => console.log(ninjaData))
      .catch( err => console.log('err: ',err))

      res.redirect('/');
})
app.get('/', (req, res) => {
   req.session.name = 'bob'
   res.send("index");
});


app.get('/student/:id/:color', (req,res)=>{
   res.send(req.session.name + req.params.id + " " + req.params.color)
})
app.all('*', (req, res) => {
    res.status=404
    res.send("404");
 });

app.listen(8000, () => console.log("listening on port 8000"));