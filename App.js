function authenticateUserRegistration(ev){
    ev.preventDefault();
    var userName = document.getElementById("nameId").value;
    var userN = document.getElementById("loginId").value;
    var passW = document.getElementById("currentp").value;
    localStorageOfCredentials(userN, passW);
}

function localStorageOfCredentials(email, password){
    if(!userExist(email)){
        localStorage.setItem(email,password);
        alert("Successfully Registered...");
        location.replace("https://formafitnessclub.netlify.app/");
    }else{
        document.getElementById("loginId").value = "";
        document.getElementById("currentp").value = "";
    }
}  // stored email and password within local storage

function userExist(email){
    try{
        let x = localStorage.getItem(email);
        alert(`${email} already registered, use different email ID.`);
        return true;
    } catch{
        return false;
    }
}

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
        location.replace("https://formafitnessclub.netlify.app/");
    } else{
        alert("invalid credentials/ password");
    }
}
