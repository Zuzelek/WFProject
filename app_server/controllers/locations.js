/* GET 'home' page */
const homelist = function(req, res){
  res.render('locations-list', {
    title: 'Musicaly - Find top songs now!',
    pageHeader: { 
      title: 'Musicaly', 
      strapline: 'Find the best tunes on the internet!' 
    },
    songOne: { 
      chart: '1',
      songName: 'Baby',
      author: 'Justin Bieber',
      releaseYear: '2011',
      length: '3:27'
    }
  });
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
  musicData  
};
