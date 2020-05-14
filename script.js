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
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("ph_number").value;
    var comment = document.getElementById("comment_textbox").value;
    console.log(name)
    console.log(email)
    console.log(number)
    console.log(comment)   
    if(name == ""){
        alert("Name Cannot Be Blank");
        console.log(name)
        return false;
    }
    if(email == ""){
        alert("Email Cannot Be Blank");
        console.log(email)
        return false;
    }
    if(number == ""){
        alert("Phone Number Cannot Be Blank");
        console.log(number)
        return false;
    }
    if(comment == ""){
        alert("Comment cannot be blank");
        console.log(comment)
        return false
    }
}