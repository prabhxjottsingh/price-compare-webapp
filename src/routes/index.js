// routes.js
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const compareController = require('../controllers/compareController');

//load the company name and products available
router.get('/', indexController);

//sort the port comparison data
router.post('/compare', compareController);

module.exports = router;
