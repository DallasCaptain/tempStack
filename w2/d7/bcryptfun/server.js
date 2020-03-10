const express = require("express");
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tempStackDb2', {useNewUrlParser: true});

const BeltSchema = new mongoose.Schema({
   color: String,
   degree: Number
})

const NinjaSchema = new mongoose.Schema({
   name: String,
   age: Number,
   belts: [BeltSchema]
})

const Ninja = mongoose.model('Ninja', NinjaSchema);
const Belt = mongoose.model('Belt', BeltSchema);

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
   
   const belt = new Belt()
   belt.color = req.body.belt
   belt.degree = 1
   belt.save()
   .then(newbelt =>{
      ninja.belts.push(newbelt)
      ninja.save()
      .then( ninjaData => {
         console.log(ninjaData)
         res.redirect('/');
      })
   })
   .catch( err => {
      console.log('err: ',err)
      res.redirect('/')
   })

})
app.post('/belt/:id/delete', (req,res) =>{
   console.log('in Del Belt')
   Belt.remove({_id : req.params.id})
   .then(()=>{
      res.redirect('/')
   })
   .catch(err =>{
      console.log('err:', err)
      res.redirect('/')
   })
})

app.get('/', (req, res) => {
   req.session.name = 'bob'
   res.send("index");
});

app.get('/belts', (req,res)=>{

   Belt.find()
   .then(belts => {
      res.render('delBelt',{belts: belts})
   })
   .catch(err =>{
      console.log('err:', err)
      res.redirect('/belts')
   })

})

app.get('/student/:id/:color', (req,res)=>{
   res.send(req.session.name + req.params.id + " " + req.params.color)
})
app.all('*', (req, res) => {
    res.status=404
    res.send("404");
 });

app.listen(8000, () => console.log("listening on port 8000"));