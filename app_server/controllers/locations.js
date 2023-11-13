const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://helloexpressal.onrender.com';
}

const register = function (req, res) {
  res.render('register-page');
};

const _renderHomepage = function (req, res, responseBody) {
  console.log(responseBody); 
  res.render('musicData', {
    title: 'Music Data - All your music in one place',
    pageHeader: {
      title: 'Music Data',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for your favourite music? Look no further!.",
    songs: responseBody
  });
};


const musicData = function (req, res) {
  const path = '/api/locations';
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {
      lng: -0.9690884,
      lat: 51.455041,
      maxDistance: 20
    }
  };

  request(requestOptions, (err, response, body) => {
  if (err) {
    console.error(err);
    // Handle the error, e.g., render an error page
    res.render('error', { error: 'Failed to fetch music data' });
    return;
  }
  _renderHomepage(req, res, body);
});

};

module.exports = {
  register,
  musicData  // Keeping the naming the same as "musicData"
};
