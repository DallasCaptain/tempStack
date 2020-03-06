const express = require("express");
const app = express();
const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



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