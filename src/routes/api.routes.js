const express = require('express');
const apiRouter = express.Router();
const api_controller = require('../controllers/api_controller.js')
/* when testing the routes for the queries, there's no need 
to write the _ at the begining of the id, as comes when fetching the colection*/

apiRouter.get('/api', api_controller.items)
apiRouter.get('/api/collection', api_controller.collection)
apiRouter.get('/api/collection/:id', api_controller.collection)

module.exports = apiRouter;