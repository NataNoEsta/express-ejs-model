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
        // const query = !id ? await Pictures.find().exec() : await Pictures.findOne({ _id: id}).exec();
        console.log('aca',query)
        // res.render('pages/items', { data: query })
    } catch (error) {
        return res.status(500).json(error)
    }
       
})

const item = (async(req, res) => {
    try {
        const { id } = req.params
        const query = await Pictures.findOne({ _id: id }).exec();
        console.log('acá', queryOne)
        res.render('pages/item', {data: query} )
    }catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = {
    home,
    about,
    itemlist,
    item
}