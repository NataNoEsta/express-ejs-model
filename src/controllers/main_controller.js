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
        const query = await Pictures.find().exec();
        console.log(query)
        res.render('pages/itemlist', { data: query })

    } catch (error) {
        return res.status(500).json(error)
    }
       
})

module.exports = {
    home,
    about,
    itemlist
}