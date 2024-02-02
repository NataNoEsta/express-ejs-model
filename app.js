const express = require('express')
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const db = mongoose.connection;
require('dotenv').config();

const PORT = process.env.PORT

// Database config
const DATABASE_URL = process.env.DATABASE_URL;

// deprecated
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Conection to database
const connection = async () => {
    await mongoose.connect(DATABASE_URL)
}
connection();

// Events for open/close connection
mongoose.connection
    .once('open', () => console.log('Conected to mongoose'))
    .on('close', () => console.log('Conection closed'))
    .on('error', (error) => console.log('Conection error', error))

// Main app routes
const main_routes = require('./src/routes/main.routes.js');
const api_routes = require('./src/routes/api.routes.js');

//template engine | ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // override for put and delete methods
app.use(morgan('dev')); //logging
app.use(cors());
app.use(express.json());


// serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/styles')));
app.use(express.static(path.join(__dirname, 'public/images')));
app.use(express.static('public'));

app.use('/', main_routes);
app.use('/about', main_routes)
app.use('/items', main_routes)
app.use('/items/:id', main_routes)
app.use('/api/', api_routes)
app.use('/api/collection', api_routes)
app.use('/api/collection/:id', api_routes)

// app.get('/', async (req, res) => {
//     const pictures = await pictures.find({})
//     console.log('yes')
//     res.render('index.ejs', { pictures })
// })

app.listen(PORT, () => {
    console.log(`App live at port http://localhost:${PORT}`)
})

module.exports = app