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

router.get('/', function (req, res, next) {
    var username = req.query.j_username;
    var oldPass = req.query.j_password;
    var newPass = req.query.new_password;

    client
        .init().url('https://ssrocdocuments.nsw.gov.au/users/login/')
        .setValue('[name="j_username"]', username)
        .setValue('[name="j_password"]', oldPass)
        .click('#loginSubmitButton')
        .getTitle().then(function (title) {
            if (title == "AsdeqDocs Server - Log In") {
                console.log("Incorrect Password");
            } else {
                console.log("Correct Password");
                console.log("New Password: " + newPass);
            }
        })
        .click('=Change Password')
        .setValue('#p1', oldPass)
        .setValue('#p2', newPass)
        .setValue('#p3', newPass)
        .click('.changePass')
        .elements("h3").then(function (title) {
            console.log(title.value.length);
            if (title.value.length == 2) {
                console.log("Password Changed");
                res.sendFile(path.join(__dirname + '/pages/success.html'));
            } else {
                console.log("Password Not Changed");
                res.sendFile(path.join(__dirname + '/pages/fail.html'));
            }
        })
        .end();
});

module.exports = router;