
function formValidate() {

    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var error = document.getElementById("error");
    var text = "";

    if (userName.length < 3) {
        text = "enter a valid name";
        error.innerHTML = text;
        return false;
    }
    else if (email.indexOf("@") == -1) {
        text = "enter a valid mail";
        error.innerHTML = text;
        return false;
    } else if (isNaN(phone)) {
        text = "enter a valid phone number"
        error.innerHTML = text;
        return false;
    }
    else {
        alert("done");
        return true;
    }
}
