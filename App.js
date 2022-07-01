function authenticateUserRegistration(ev){
    ev.preventDefault();
    var userName = document.getElementById("nameId").value;
    var userN = document.getElementById("loginId").value;
    var passW = document.getElementById("currentp").value;
    localStorageOfCredentials(userN, passW, userName);
}

function localStorageOfCredentials(email, password, userName){
    if(!userExist(email)){  // ! used initially
        const info = {};
        info.uname = userName;
        info.pword = password;
        localStorage.setItem(email,JSON.stringify(info));
        alert("Successfully Registered...");
        location.replace("https://formafitnessclub.netlify.app/");
        alert(`Hello ${userName}, Welcome to Forma Gym`);
        
    }else{
        document.getElementById("loginId").value = "";
        document.getElementById("currentp").value = "";
    }
}  // stored email and password within local storage

function userExist(email){
    let x = JSON.parse(localStorage.getItem(email));
    if(x == null){
        return false;
    } else{
        alert(`${email} already registered, use different email ID.`);
        return true;

    }
}

function authenticateUserLogin(e){
    e.preventDefault();
    var userN = document.getElementById("loginId").value;
    var passW = document.getElementById("currentp").value;
    let userPassWord;
    try{
        userPassWord = JSON.parse(localStorage.getItem(userN));
    } catch{
        alert("No such user exist/ Check Your Credentials");
        return;
    }
    if(passW == userPassWord.pword){
        alert("Authorized..");
        document.getElementById("loginId").value = "";
        document.getElementById("currentp").value = "";
        location.replace("https://formafitnessclub.netlify.app/");
        alert(`Hello ${userPassWord.uname}, welcome back!!!`);
    } else{
        alert("invalid credentials/ password");
    }
}
