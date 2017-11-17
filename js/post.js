function post() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://ssrocdocuments.nsw.gov.au/users/login/authenticate?j_username=administrator&j_password=fA6jwuZsh22l",
        "method": "POST",
        "headers": {
            "cache-control": "no-cache",
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}