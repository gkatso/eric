$(document).ready(function(){
    $('#navbar-toggler').click(function(){
        $('#navbar-collapse').slideToggle(400);
    });

  $(window).scroll(function(){
      let pos = $(window).scrollTop();
      if(pos >= 100){
        $('.navbar').addClass('cng-navbar');
      } else{
        $('.navbar').removeClass('cng-navbar');
        }
     });  
  });

  document.addEventListener("DOMContentLoaded", function () {
    var loginButton = document.getElementById("login-button");
    var loginPopup = document.getElementById("login-popup");
    var closeLoginButton = document.getElementById("close-login-button");

    loginButton.addEventListener("click", function () {
        loginPopup.style.display = "block";
    });

    closeLoginButton.addEventListener("click", function () {
        loginPopup.style.display = "none";
    });
});

function performLogin() {
    // Add your login logic here
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check username and password (this is just a simple example, not secure)
    if (username === "user1" && password === "user1") {
        alert("Login successful!");
        hideLoginPopup();
    } else {
        alert("Invalid username or password. Try again.");
    }
}

function hideLoginPopup() {
    var loginPopup = document.getElementById("login-popup");
    loginPopup.style.display = "none";
}