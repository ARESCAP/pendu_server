var express = require('express');
const Words = require("./models");
var router = express.Router();
const app = express();


// http://localhost:3000/mot
router.get("/mot", (req, res) => {
    Words.find({}, (err, data) => {
      // res.render('base.html.twig', {
      //   mots: data
      // });
      res.json({mots: data});
    });
});

module.exports = app;
module.exports = router;