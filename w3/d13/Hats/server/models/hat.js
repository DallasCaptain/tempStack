const mongoose = require('mongoose')

const HatSchema = new mongoose.Schema({
    color: String,
    price: Number,
    stock: Number,
    url: String,
})
const BeltSchema = new mongoose.Schema({
    color: String,
    price: Number,
    stock: Number,
    url: String,
})

const Hat = mongoose.model('Hat', HatSchema);
const Belt = mongoose.model('Belt', BeltSchema);

module.exports = {
    Hat : Hat,
    Belt  : Belt,
}