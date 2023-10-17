/* GET 'Register Page' page */
const register = function(req, res){
  res.render('register-page');
};

/* GET 'Music Data' page */
const musicData = function(req, res) {
  res.render('musicData', {
    title: 'Music Data',
    songOne: [
      {
        chart: 1,
        songName: 'Baby',
        genre: 'Pop',
        artist: 'Justin Bieber',
        releaseYear: 2011,
        length: '3:27'
      },
      {
        chart: 2,
        songName: 'Kurwa Bober',
        genre: 'Techno',
        artist: 'Bubr',
        releaseYear: 2016,
        length: '1:20'
      },
      {
        chart: 3,
        songName: 'Champions',
        genre: 'Hardstyle',
        artist: 'Noise Controllerz',
        releaseYear: 2022,
        length: '2:57'
      },
	  {
		  chart: 4,
		  songName: 'Paint the Town Red',
		  genre: 'Pop',
		  artist: 'Doja Cat',
		  releaseYear: 2023,
		  length: '3:50'
	  }
    ]
  });
};

module.exports = {
  register,
  musicData  
};
