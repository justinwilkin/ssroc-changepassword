function change() {
    var newPassword = $("#new-password")[0].value;
    var againPassword = $("#new-again")[0].value;

    //<div class="incorrect"><img class="incorrect-cross" src="img/cross.png"/></div>

    console.log(newPassword);
    console.log(againPassword);
    if (newPassword == againPassword) {
        var username = "cptest";
        var password = $("#password")[0].value;
        console.log("redirecting")
        window.location = "/confirm?" + "j_username=" + username + "&j_password=" + password + "&new_password=" + newPassword;
    } else {
        console.log("Passwords do not match.");
    }

}