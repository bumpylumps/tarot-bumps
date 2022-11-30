const express = require('express');
const router = express.Router();

const cardopediaController = require('../controllers/cardopedia');

router.get('/', cardopediaController.getCardopedia);
//make get for card lookup

module.exports = router; 