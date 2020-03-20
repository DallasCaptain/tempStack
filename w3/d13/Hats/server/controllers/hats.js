const { Hat } = require('../models/hat.js')
const { Belt } = require('../models/hat.js')

module.exports = {
    index: function(req, res) {
        //show all the Hats
        //return a object with a list of hats
        Hat.find()
        .then(hats => {
            res.json({
                    message:'success',
                    hats: hats
                })
        })
        .catch(err => {
            res.json({
                message:'error',
                error: err
            })
        })
    },
    show: function(req, res) {
        //show one hat
        //return and object with a single hat
        Hat.findOne({_id: req.params.id})
        .then(hat =>{
            res.json({
                message:'success',
                hat: hat
            })
        })
        .catch(err => {
            res.json({
                message:'error',
                error: err
            })
        })
    },
    
    create: function(req, res) {
        //console.log('hat controller create called')
        newhat = {}
        newhat.color = req.body.color
        newhat.price = req.body.price
        newhat.stock = req.body.stock
        newhat.url = req.body.url

        Hat.create(newhat)
        .then(hat => {
            res.json(hat)
        })
        .catch(err => {
            res.json({
                message:'error',
                error: err
            })
        })
    },
    
    update: function(req, res) {
        Hat.findOne({_id: req.body._id})
        .then(oldHat =>{
            oldHat.color = req.body.color;
            oldHat.price = req.body.price;
            oldHat.stock = req.body.stock;
            oldHat.url = req.body.url;
            oldHat.save()
            .then(hat =>{
                res.json({
                    message:'success',
                    hat:hat
                })
            })
        })
        .catch(err => {
            res.json({
                message:'error',
                error: err
            })
        })
    },
    destroy: function(req, res) {
        console.log('destroying', req.params.id)
        Hat.deleteOne({_id: req.params.id})
        .then(data =>{
            res.json({
                'message':'success',
                'data':data
            })
        })
        .catch(err => {
            res.json({
                message:'error',
                error: err
            })
        })
    },

    //angular made these useless
    new: function(req, res) {
        //no DB functionality
    },
    edit: function(req, res) {
        //no DB functionality
    },
};