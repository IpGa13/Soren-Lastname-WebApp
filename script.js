function checkLogin() {
    if(document.getElementById("name").value == "root" && document.getElementById("pw").value == "toor"){
        
        window.location.href = "webapp.html";
    }

    else if(document.getElementById("name").value == "jhnor" && document.getElementById("pw").value == "Irrtum33") {
        window.location.href = "webapp.html";
    }

    else{
        alert("login incorrect");
    }
}