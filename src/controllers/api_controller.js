const { Pictures } = require('../models/main_model.js');

const items = ((req, res) => {
  res.status(200).send('hey')
})

// const allitems = (async (req, res) => {
//   const items = await Pictures.find().exec()
//   res.json({items})
// })

const collection = (async (req, res) => {
  try {
    let { id } = req.params
    const getall = !id ? await Pictures.find().exec() : await Pictures.findById({ _id: id }).exec();
    res.status(200).json(getall)
    console.log('fff',getall)
  } catch (error) {
    console.log(error)
    res.status(404).json('error', error)
  }
})

module.exports = {
  items,
  // allitems,
  collection
}