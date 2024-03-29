import express from 'express';
const web = express.Router();

import * as WebController from './web.controller.js';

web.get('/', WebController.getIndex);
web.get('/services', WebController.getServices);
web.get('/contact', WebController.getContact);
web.get('/about', WebController.getAbout);
web.get('/terms', WebController.getTerms);
web.get('/privacy', WebController.getPrivacy);
web.get('/thank-you', WebController.getThankYou);
web.get('/health-check', WebController.getHealthCheck);

web.post('/contact', WebController.postContact);
web.get('/application', WebController.getApplication);
web.post('/athlete-application', WebController.postAthleteApplication);

export default web;
