function authenticateUserRegistration(ev){
    ev.preventDefault();
    var userName = document.getElementById("nameId").value;
    var userN = document.getElementById("loginId").value;
    var passW = document.getElementById("currentp").value;
    localStorageOfCredentials(userN, passW);
    alert("Successfully Registered...");

}

function localStorageOfCredentials(email, password){
    localStorage.setItem(email,password);
}  // stored email and password within local storage

function authenticateUserLogin(e){
    e.preventDefault();
    var userN = document.getElementById("loginId").value;
    var passW = document.getElementById("currentp").value;
    let userPassWord;
    try{
        userPassWord = localStorage.getItem(userN)
    } catch{
        alert("No such user exist");
        return;
    }
    if(passW == userPassWord){
        alert("Authorized");
        document.getElementById("loginId").value = "";
        document.getElementById("currentp").value = "";
    } else{
        alert("invalid credentials/ password");
    }
}
