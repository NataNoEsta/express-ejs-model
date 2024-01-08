const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main_controller.js');


const path = require('path');

router.get('/', mainController.home)
router.get('/about', mainController.about)
router.get('/itemlist', mainController.itemlist)

module.exports = router