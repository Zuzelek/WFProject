const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

router.get('/register/', ctrlLocations.register);
router.get('/musicData/', ctrlLocations.musicData);

/* Other pages */
router.get('/login', ctrlOthers.loginPage);
router.post('/loginSubmit', ctrlOthers.logInData);


router.post('/userRegistartion', ctrlOthers.userRegistrationInfo);


module.exports = router;
