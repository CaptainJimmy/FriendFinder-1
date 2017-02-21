var express = require("express");
var path = require("path");
var router = express.Router();

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.post('/api/friends', function(req, res) {


});

// define the survey route
router.get('/api/friends', function(req, res) {
    res.send('Hi there friends!');
});

module.exports = router;