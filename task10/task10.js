var password = "mypassword";
var userPassword = prompt("Enter Your Password");
if (userPassword === "" ) {
    alert("Please enter password");
}
    else if(userPassword === password) {
        alert("Correct Password");
    } 
    else{
        alert("Incorrect Password");
    }
