const mongoose = require('mongoose');
const Song = mongoose.model('Song');


const reviewsCreate = function (req, res) {
  res
.status(200)
.json({"status" : "success"});
 };

const reviewsReadOne = function (req, res) {
  res
.status(200)
.json({"status" : "success"});
 };

const reviewsUpdateOne = function (req, res) {
  res
.status(200)
.json({"status" : "success"});
 };

const reviewsDeleteOne = function (req, res) {
  res
.status(200)
.json({"status" : "success"});
};

module.exports = {
  reviewsCreate,
  reviewsReadOne,
  reviewsUpdateOne,
  reviewsDeleteOne
};
