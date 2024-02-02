const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main_controller.js');
const api_controller = require('../controllers/api_controller.js')

router.get('/', mainController.home)
router.get('/about', mainController.about)
router.get('/itemlist', mainController.itemlist)
router.get('/item/:id', mainController.itemlist)
router.get('/api', api_controller.items)
router.get('/api/collection', api_controller.collection)
router.get('/api/collection/:id', api_controller.collection)

module.exports = router