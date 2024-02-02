// const data = require('../data/data.js');
const { mongoose } = require('mongoose');
const { Pictures } = require('../models/main_model.js');
require('dotenv').config();

// const coleccion = mongoose.connection

const home = ((req, res) => {
    res.render('pages/index')
})
const about = ((req, res) => {
    res.render('pages/about')
})

const itemlist = (async(req, res) => {
    try {
        const { id } = req.params
        let query;
        if(!id) {
            query = await Pictures.find().exec()
            res.render('pages/items', { data: query })
        }else{
            query = await Pictures.findById({ _id: id}).exec()
            res.render('pages/item', { data: query })
        }
        console.log('aca',query)
    } catch (error) {
        return res.status(500).json(error)
    }
       
})

module.exports = {
    home,
    about,
    itemlist
}