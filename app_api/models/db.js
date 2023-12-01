const mongoose = require('mongoose');
const dbURI = "mongodb+srv://alan35691:alan3569@cluster0.qmfm0ne.mongodb.net/musicData?retryWrites=true&w=majority";

try {

mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
	err=> {console.log(err)}
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./locations');
