const express = require('express');
const apiRouter = express.Router();
const api_controller = require('../controllers/api_controller.js')

apiRouter.get('/api', api_controller.items)
apiRouter.get('/api/collection', api_controller.collection)
apiRouter.get('/api/collection/:id', api_controller.collection)

module.exports = apiRouter;