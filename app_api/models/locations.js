const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
chart: {
  type: Number,
  required: true
  },
songName: {
  type: String,
  required: true
},
genre: {
type: String,
default: "Not Specified",
},
artist: {
  type: String,
  required: true
},
releaseYear: {
  type: Number
},
length:{
  type: String,
  required: true
}
});



mongoose.model('Song', songSchema);
