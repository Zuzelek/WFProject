const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://helloexpressal.onrender.com';
}

const register = function (req, res) {
  console.log("**** ", )
  res.render('register-page');
};

const _renderHomepage = function (req, res, responseBody) {
  res.render('musicData', {
    title: 'Music Data - All your music in one place',
    pageHeader: {
      title: 'Music Data',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for your favourite music? Look no further!.",
    songs: responseBody.songs
  });
};


const musicData = function (req, res) {
  const path = '/api/locations';  // Adjust the path based on your API
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {}
  };

  request(requestOptions, (err, response, body) => {
  if (err) {
    console.error(err);
    // Handle the error, e.g., render an error page
    res.render('error', { error: 'Failed to fetch music data' });
    return;
  }
  console.log(response.statusCode);  // Log the response status
  console.log("*** data",body);  // Log the response body
  _renderHomepage(req, res, body);
});


};

module.exports = {
  register,
  musicData
};
