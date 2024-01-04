const home = ((req, res) => {
    res.render('pages/index')
})
const about = ((req, res) => {
    res.render('pages/about')
})
module.exports = {
    home,
    about
}