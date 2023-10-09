const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations'); 
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/musicData', ctrlLocations.musicData);


/* Other pages */
router.get('/login', ctrlOthers.about);
module.exports = router;


