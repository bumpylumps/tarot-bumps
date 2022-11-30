const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');


router.get('/', homeController.getHome);
router.get('/pull', homeController.getSinglePull); 



module.exports = router; 