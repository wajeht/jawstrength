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
router.get('/thank-you', indexController.getThankYou);

router.post('/contact', indexController.postContact);
router.post('/application', indexController.postApplication);
router.post('/athlete-application', indexController.postAthleteApplication);

module.exports = router;
