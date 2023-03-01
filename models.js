const mongoose = require("mongoose");

var Schema = mongoose.Schema;

mongoose.model('mots', new Schema({ mot: String}));
var Questions = mongoose.model('mots');

module.exports = Schema;
module.exports = Questions;