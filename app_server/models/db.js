const mongoose = require('mongoose');
const dbURI = "mongodb+srv://alan35691:soslogin123@cluster0.00wzfxg.mongodb.net/musicData?retryWrites=true&w=majority";

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
}//require('./locations');
