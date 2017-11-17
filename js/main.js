window.onload = function () {
    setTextbox();
    window.validated = false;
}

$(window).resize(function () {
    setTextbox();
});


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.myUsername = getParameterByName('j_username');

$("#username")[0].innerHTML = myUsername;


function setTextbox() {
    var newWidth = $("#navbar").width() - 62;

    $(".field").css({
        width: newWidth
    });
}

function login() {
    if (window.validated == true) {
        var newPassword = $("#new-password")[0].value;
        var againPassword = $("#new-again")[0].value;

        //<div class="incorrect"><img class="incorrect-cross" src="img/cross.png"/></div>

        console.log(newPassword);
        console.log(againPassword);
    } else {
        var username = myUsername;
        var password = $("#password")[0].value;

        window.location = "/index?" + "j_username=" + username + "&j_password=" + password;
    }

}