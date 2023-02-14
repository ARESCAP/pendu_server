var express = require('express');
var server = express();
// lien entre client et serveur
var morgan = require('morgan');
var routeur = require('./router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const motSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    mot: String
});

const motModel = mongoose.model('testCollection', motSchema);

motModel.find()
    .exec()
    .then(function(mots) {
        console.log(mots)
    })
    .catch();

server.use(express.static('public'));
server.use(morgan('dev'));
server.use('/', routeur);

server.listen(3005);

