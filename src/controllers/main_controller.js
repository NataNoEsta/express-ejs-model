const data = require('../data/data.js');


const home = ((req, res) => {
    res.render('pages/index')
})
const about = ((req, res) => {
    res.render('pages/about')
})
const itemlist = ((req, res) => {
    res.render('pages/itemlist', {data: data})
})
module.exports = {
    home,
    about,
    itemlist
}