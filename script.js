//Yep. all login data is stored in plaintext and hardcoded. im not paying for an actual server to host this joke.

function checkLogin() {
    if(document.getElementById("name").value == "root" && document.getElementById("pw").value == "toor"){
        
        window.location.href = "devapp.html";
    }

    else if(document.getElementById("name").value == "jhnor" && document.getElementById("pw").value == "earthround") {
        window.location.href = "premiumapp.html";
    }

    else if(document.getElementById("name").value == "soren" && document.getElementById("pw").value == "LeanIsTheBestDrug") {
        window.location.href = "premiumapp.html";
    }

    else if(document.getElementById("name").value == "guest" && document.getElementById("pw").value == "") {
        window.location.href = "webapp.html";
    }

    else{
        alert("login incorrect");
    }
}