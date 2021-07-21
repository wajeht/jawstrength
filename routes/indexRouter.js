// express
const express = require('express');
const router = express.Router();

// controllers
const indexController = require('../controllers/indexController.js');

router.get('/', indexController.getIndex);
router.get('/services', indexController.getServices);
router.get('/contact', indexController.getContact);
router.get('/about', indexController.getAbout);
router.get('/terms', indexController.getTerms);
router.get('/privacy', indexController.getPrivacy);

router.post('/application', indexController.postApplication);

module.exports = router;
