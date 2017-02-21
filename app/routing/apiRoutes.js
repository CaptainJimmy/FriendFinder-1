var express = require("express");
var path = require("path");
var router = express.Router();
var friendsList = require('../data/friends.js');

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.post('/api/friends', function(req, res) {
    var newSurvey = req.body;
    friendsList.push(newSurvey);
    res.json(newSurvey);
    console.log(friendsList);

});

router.get('/api/friends', function(req, res) {
    res.send('Hi there friends!');
});

module.exports = router;