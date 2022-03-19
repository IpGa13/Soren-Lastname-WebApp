function checkLogin() {
    if(document.getElementById("name").value == "root" && document.getElementById("pw").value == "toor"){
        
        window.location.href = "devapp.html";
    }

    else if(document.getElementById("name").value == "jhnor" && document.getElementById("pw").value == "Irrtum33") {
        window.location.href = "premiumapp.html";
    }

    else if(document.getElementById("name").value == "guest" && document.getElementById("pw").value == "") {
        window.location.href = "webapp.html";
    }

    else{
        alert("login incorrect");
    }
}