const express = require('express')
const app = express();
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose')
require('dotenv').config();


// const PORT = 3000;
const PORT = process.env.PORT

// Database config
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Conection to database
mongoose.connect(DATABASE_URL)

// Events for open/close connection

mongoose.connection
    .on('open', () => console.log('Conected to mongoose'))
    .on('close', () => console.log('Conection closed'))
    .on('error', (error) => console.log('Conection error', error))

const { Schema, model } = mongoose

const picturesSchema = new Schema({
    text: String
})

const pictures = model("Pictures", picturesSchema)


// Main app routes
const main_routes = require('./src/routes/main_routes')

//template engine | ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

// middlewares
app.use(express.urlencoded({extended: true})); 
app.use(methodOverride('_method')); // override for put and delete methods
app.use(morgan('tiny')); //logging
app.use(express.json());

// serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.use('/', main_routes);
app.use('/about', main_routes)

app.get('/', async (req, res) => {
    const pictures = await pictures.find({})
    console.log('yes')
    res.render('index.ejs', { todo })
})

app.listen(PORT, () => {
    console.log(`Servr started at port http://localhost:${PORT}`)
})