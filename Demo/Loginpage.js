var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "arora0732" && password == "pass"){
alert ("Login successfully");
window.location = "https://www.google.com/"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}



/*function validate()
    {
     	if(form.username.value == "arora0732" && form.password.value =="password")
            {
                window.open('http://localhost:4848/extensions/new/new.html')
                return true;
            }
        else
            {
                alert("Incorrect Username or Password" );
                return false;
            }

    }
*/