// routes.js
const express = require('express');
const router = express.Router();
const { getIndex, postCompare } = require('../controllers');

// Define routes
router.get('/', getIndex);
router.post('/compare', postCompare);

module.exports = router;
