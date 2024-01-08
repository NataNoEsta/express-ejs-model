const mongoose = require('mongoose');

const { Schema, model } = mongoose

const picturesSchema = new Schema({
    title: String,
    type: String,
    url: String
})

const pictures = model("Pictures", picturesSchema)

module.exports = { picturesSchema, pictures }