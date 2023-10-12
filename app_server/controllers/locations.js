/* GET 'Register Page' page */
const register = function(req, res){
  res.render('register-page', );
};

/* GET 'Music Data' page */
const musicData = function(req, res) {
  res.render('musicData', {
    title: 'Music Data',
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

module.exports = {
  register,
  musicData  
};
