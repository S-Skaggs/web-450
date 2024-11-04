const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let plantSchema = new Schema({
  name: String,
  type: String,
  status: String,
  datePlanted: Date,
  dateHarvested: Date,
  dateCreated: Date,
  dateModified: Date,
  gardenId: Number
});

module.exports = {
  Plant: mongoose.model('Plant', plantSchema);
}