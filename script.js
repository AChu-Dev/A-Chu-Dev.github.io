var imagepos;

window.setInterval(timer, 4000);

function timer() {
    carosuel1();
    carosuel2();
    checkInput();
}

function carosuel1() {
    imagepos = document.getElementById("pyImg").src;
    console.log(imagepos)
    if (imagepos == "https://github.com/AChu-Dev/A-Chu-Dev.github.io/blob/master/assets/python1a.JPG") {
        document.getElementById("pyImg").src = "https://github.com/AChu-Dev/A-Chu-Dev.github.io/blob/master/assets/python1b.JPG";
    }
    else if (imagepos == "https://github.com/AChu-Dev/A-Chu-Dev.github.io/blob/master/assets/python1b.JPG") {
        document.getElementById("pyImg").src = "https://github.com/AChu-Dev/A-Chu-Dev.github.io/blob/master/assets/python2a.JPG";
    }
    else if (imagepos == "https://github.com/AChu-Dev/A-Chu-Dev.github.io/blob/master/assets/python2a.JPG") {
        document.getElementById("pyImg").src = "https://github.com/AChu-Dev/A-Chu-Dev.github.io/blob/master/assets/python2b.JPG";
    }
    else {
        document.getElementById("pyImg").src = "https://github.com/AChu-Dev/A-Chu-Dev.github.io/blob/master/assets/python1a.JPG";
        console.log("else");
    }
}

function carosuel1L(){
    imagepos = document.getElementById("pyImg").src;

    if (imagepos == "https://github.com/AChu-Dev/A-Chu-Dev.github.io/blob/master/assets/python1a.JPG") {
        document.getElementById("pyImg").src = "https://github.com/AChu-Dev/A-Chu-Dev.github.io/blob/master/assets/python2b.JPG";
    }
    else if (imagepos == "https://github.com/AChu-Dev/A-Chu-Dev.github.io/blob/master/assets/python2b.JPG") {
        document.getElementById("pyImg").src = "https://github.com/AChu-Dev/A-Chu-Dev.github.io/blob/master/assets/python2a.JPG";
    }
    else if (imagepos == "https://github.com/AChu-Dev/A-Chu-Dev.github.io/blob/master/assets/python2a.JPG") {
        document.getElementById("pyImg").src = "https://github.com/AChu-Dev/A-Chu-Dev.github.io/blob/master/assets/python1b.JPG";
    }
    else {
        document.getElementById("pyImg").src = "https://github.com/AChu-Dev/A-Chu-Dev.github.io/blob/master/assets/python1a.JPG";
    }
}

function carosuel2() {
    imagepos = document.getElementById("oopImg").src;

    if (imagepos == "https://achu-dev.github.io/A-Chu-Dev.github.io/assets/oop1a.jpg") {
        document.getElementById("oopImg").src = "https://achu-dev.github.io/A-Chu-Dev.github.io/assets/oop1b.jpg";
    }
    else {
        document.getElementById("oopImg").src = "https://achu-dev.github.io/A-Chu-Dev.github.io/assets/oop1a.jpg";
    }
}

function checkInput(){
    var name = document.forms["user_form"]["name"].value;
    var email = document.forms["user_form"]["emails"].value;
    var number = document.forms["user_form"]["ph_number"].value;
    var comment = document.forms["user_form"]["comment_textbox"].value;
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