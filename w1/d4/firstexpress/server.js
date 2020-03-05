const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/', (request, response) => {
   response.render("index");
});
app.post('/stuff',(req, res)=> {
   console.log(req.body)
   res.send('data gotten')
});
app.all('*', (request, response) => {
    response.status=404
    response.send("404");
 });

app.listen(8000, () => console.log("listening on port 8000"));