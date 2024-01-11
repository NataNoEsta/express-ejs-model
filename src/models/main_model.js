const mongoose = require('mongoose');
require('dotenv').config();

const { Schema, model } = mongoose

const pictureSchema = new Schema(
    {
        title: String,
        type: String,
        url: String
    },
    {
        collection: 'pictures'
    }
)

const Pictures = model("pictures", pictureSchema)

module.exports = {
    Pictures
}