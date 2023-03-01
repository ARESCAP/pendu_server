var express = require('express');
// lien entre client et serveur
var routeur = require('./router');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/testDb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


app.use(routeur);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});



module.exports = db;
module.exports = app;