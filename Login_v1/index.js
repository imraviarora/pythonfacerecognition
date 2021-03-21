var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( (username == "rarora7878@gmail.com" && password == "imraviarora") ||(username == "deepti.rana@teamcomputers.com" && password == "imdeeptirana") ){
// alert ("Login successfully");
window.open('http://localhost:4848/extensions/new/new.html');
// window.open("http://localhost:4848/extensions/new/new.html","_self");
 // Redirecting to other page.
// return false;
}
else{
attempt --;// Decrementing by one.
alert("Incorrect Email or Password");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
