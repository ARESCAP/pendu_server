var express = require('express');
var router = express.Router();
const twig = require('twig');

router.get("/", (req, res) => {
    res.render("accueil.html.twig");
});

router.get("/mot", (req, res) => {
    console.log("reception demande serveur : route /mot");
    res.end('Demande GET');
});

module.exports = router;