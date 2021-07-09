// express
const express = require('express');
const router = express.Router();

// controllers
const indexController = require('../controllers/indexController.js');

router.get('/', indexController.getIndex);
router.get('/services', indexController.getServices);
router.get('/contact', indexController.getContact);
router.get('/training-vlog', indexController.getTrainingVlog);

module.exports = router;
