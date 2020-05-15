var imagepos;

window.setInterval(timer, 6000);

function timer() {
    carosuel1();
    carosuel2();
}

function carosuel1() {
    imagepos = document.getElementById("pyImg").src;
    if (imagepos == "https://achu-dev.github.io/A-Chu-Dev.github.io/assets/python1a.JPG") {
        document.getElementById("pyImg").src = "assets/python1b.JPG";
    }
    else if (imagepos == "https://achu-dev.github.io/A-Chu-Dev.github.io/assets/python1b.JPG") {
        document.getElementById("pyImg").src = "assets/python2a.JPG";
    }
    else if (imagepos == "https://achu-dev.github.io/A-Chu-Dev.github.io/assets/python2a.JPG") {
        document.getElementById("pyImg").src = "assets/python2b.JPG";
    }
    else {
        document.getElementById("pyImg").src = "assets/python1a.JPG";
        
    }
}

function carosuel1L(){
    imagepos = document.getElementById("pyImg").src;

    if (imagepos == "https://achu-dev.github.io/A-Chu-Dev.github.io/assets/python1a.JPG") {
        document.getElementById("pyImg").src = "assets/python2b.JPG";
    }
    else if (imagepos == "https://achu-dev.github.io/A-Chu-Dev.github.io/assets/python2b.JPG"){
        document.getElementById("pyImg").src = "assets/python2a.JPG";
    }
    else if (imagepos == "https://achu-dev.github.io/A-Chu-Dev.github.io/assets/python2a.JPG") {
        document.getElementById("pyImg").src = "assets/python1b.JPG";
    }
    else {
        document.getElementById("pyImg").src = "assets/python1a.JPG";
    }
}

function carosuel2() {
    imagepos = document.getElementById("oopImg").src;

    if (imagepos == "https://achu-dev.github.io/A-Chu-Dev.github.io/assets/oop1a.JPG") {
        document.getElementById("oopImg").src = "assets/oop1b.JPG";
    }
    else {
        document.getElementById("oopImg").src = "assets/oop1a.JPG";
    }
}

function checkInput(){
    var name = document.forms["survey-form"]["name"].value;
    var email = document.forms["survey-form"]["email"].value;
    var number = document.forms["survey-form"]["ph_number"].value;
    var comment = document.getElementById("comment_textbox").value;
    var opt_in = document.getElementById("opt_in").value;

    if(name == ""){
        alert("Name Cannot Be Blank");
        return false;
    }
    if(email == ""){
        alert("Email Cannot Be Blank");
        return false;
    }
    if(number == ""){
        alert("Phone Number Cannot Be Blank");
        return false;
    }
    if(comment == ""){
        alert("Comment cannot be blank");
        return false;
    }
    if(opt_in == ""){
        alert("You Have Not Opted In");
        return false;
    }
}