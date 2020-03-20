const hats = require('../controllers/hats.js')


module.exports = function(app){
   app.get('/', (req, res) => {
      //causes angular to load
   });

   app.post('/hats', (req,res) => {
      hats.create(req,res)
   });

   app.get('/hats', (req,res) => {
      hats.index(req,res)
   });

   app.get('/hats/:id', (req,res) => {
      hats.show(req,res)
      
   });

   app.put('/hats',(req,res)=>{
      hats.update(req,res)
   })
   app.delete('/hats/:id', (req,res)=>{
      console.log('inroute delete')
      hats.destroy(req,res)
   })

   app.all('*', (req, res) => {
      
   });

}