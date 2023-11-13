const mongoose = require('mongoose');
const Song = mongoose.model('Song');



locationsCreate = function (req, res) {
  Song.create({
    chart: req.body.chart,
    songName: req.body.songName,
    genre: req.body.genre,
    artist: req.body.artist,
    releaseYear: req.body.releaseYear,
    length: req.body.length,
  })
    .then((location) => {
      res.status(201).json(location);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const locationsListByDistance = function (req, res) {
  res
  .status(200)
  .json({"status" : "success"});
 };

 const locationsReadOne = function (req, res) {
   if (req.params && req.params.musicid) {
     Song
       .findById(req.params.musicid)
       .then((location) => {
         if (!location) {
           res
             .status(404)
             .json({
               "message": "MusicId not found"
             });
           return;
         }
         res
           .status(200)
           .json(location);
       })
       .catch((err) => {
         res
           .status(500)
           .json(err);
       });
   } else {
     res
       .status(400)
       .json({
         "message": "No MusicId in request"
       });
   }
 };



const locationsUpdateOne = function (req, res) {
  res
.status(200)
.json({"status" : "success"});
};

const locationsDeleteOne = function (req, res) {
  res
.status(200)
.json({"status" : "success"});
};

module.exports = {
  locationsListByDistance,
  locationsCreate,
  locationsReadOne,
  locationsUpdateOne,
  locationsDeleteOne
};
