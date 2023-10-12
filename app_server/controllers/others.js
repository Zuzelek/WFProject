/* GET login page */
const login = function(req, res){
  res.render('login-page', { title: 'Login' });
};

module.exports = {
  login
};