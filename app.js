const express = require('express')
const app = express();
const path = require('path');
const PORT = 3000;

const main_routes = require('./src/routes/main_routes')

//template engine | ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

// middlewares
app.use(express.urlencoded());
app.use(express.json());

// serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.use('/', main_routes);
app.use('/about', main_routes)

app.listen(PORT, () => {
    console.log(`Servr started at port http://localhost:${PORT}`)
})