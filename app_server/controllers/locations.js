/* GET 'home' page */
const homelist = function(req, res) {
  res.render('locations-list', { title: 'Home' });
};

/* GET 'Location info' page */
const locationInfo = function(req, res) {
  res.render('index', { title: 'Location info' });
};

/* GET 'Add review' page */
const addReview = function(req, res) {
  res.render('index', { title: 'Add review' });
};

/* GET 'Music Data' page */
const musicData = function(req, res) {
  res.render('musicData', { title: 'Music Data' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview,
  musicData  // Make sure to include this in the exported object
};
