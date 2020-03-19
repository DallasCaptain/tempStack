const hats = require('../controllers/hats.js')


module.exports = function(app){
   app.get('/', (req, res) => {
      
   });

   app.post('/hats', (req,res) => {
      hats.create(req,res)
   });

   app.get('/hats', (req,res) => {
      hats.index(req,res)
   });

   app.post('/belt/:id/delete', (req,res) => {
      
   });

   app.all('*', (req, res) => {
      
   });

}