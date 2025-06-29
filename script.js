let d1 = document.querySelector("#div1");
let d2 = document.querySelector("#div2");
let d3 = document.querySelector("#div3");
let win = document.getElementById("main4");

function fun1() {
    d1.style.display = "none";
    d2.style.display = "block";
}

function fun2() {
    d1.style.display = "block";
    d2.style.display = "none";
}



let p1 = document.getElementById("pp1");
let p2 = document.getElementById("pp2");
let res = document.getElementById("result");
let l1 = document.querySelector(".last");
let ww = document.getElementById("won");

let score1 = 0;
let score2 = 0;

let r1 = Math.ceil(Math.random() * 10);

function fun3() {
    d3.style.display = "block";
    d2.style.display = "none";
    let inp1 = document.getElementById("input1");
    let inp2 = document.getElementById("input2");
    p1.innerHTML = inp1.value + " : 0";
    p2.innerHTML = inp2.value + " : 0";
    if (inp1.value.trim() == "" || inp2.value.trim() == "") {
        if (inp1.value.trim() == "") inp1.style.border = "3px solid red";
        else inp1.style.border = "";

        if (inp2.value.trim() == "") inp2.style.border = "3px solid red";
        else inp2.style.border = "";

        d3.style.display = "none";
        d2.style.display = "block";
        return;
    }

    document.getElementById("start").disabled = true;
}

function ch() {
    let c1 = document.getElementById("chance");
    c1.innerHTML = r1;
    l1.style.display = "block";
    document.getElementById("ch1").disabled = true;
    document.getElementById("roll1").disabled = false;
}

function roll() {
    r1--;
    document.getElementById("chance").innerHTML = r1;
    
    let inp1 = document.getElementById("input1");
    let inp2 = document.getElementById("input2");

    let img1 = document.getElementById("image1");
    let img2 = document.getElementById("image2");

    let random1 = Math.ceil(Math.random() * 6);
    let random2 = Math.ceil(Math.random() * 6);
    img1.src = "dice/dice" + random1 + ".png"
    img2.src = "dice/dice" + random2 + ".png"

    player1 = inp1.value;
    player2 = inp2.value;

    if (random1 > random2) {
        score1++;
        p1.innerHTML = player1 + " : " + score1;
        res.innerHTML = player1 + " + 1";
    } else if (random1 < random2) {
        score2++;
        p2.innerHTML = player2 + " : " + score2;
        res.innerHTML = player2 + " + 1";
    } else {
        res.innerHTML = "Draw";
    }

    if (r1 == 0) {
        document.getElementById("roll1").disabled = true;
        d3.style.display = "none";
        win.style.opacity = "1";

        if (score1 > score2) {
            ww.innerHTML = player1 + " Won"
        } else if (score1 < score2) {
            ww.innerHTML = player2 + " Won"
        } else {
            ww.innerHTML = "Match Draw!";
        }
    }
}

function end() {
    d3.style.display = "none";
    d1.style.display = "block";
}

let bb1 = document.getElementById("b1");
let bb2 = document.getElementById("b2");

function funinp() {
    bb1.style.display = "block";
}

function funinp1() {
    bb2.style.display = "block";
}

function n1() {
    let inp1 = document.getElementById("input1");
    inp1.value = "";
    bb1.style.display = "none";
}

function n2() {
    let inp2 = document.getElementById("input2");
    inp2.value = "";
    bb2.style.display = "none";
}

function again() {
    win.style.opacity = "0";
    d3.style.display = "block";
    r1 = Math.ceil(Math.random() * 10);
    let inp1 = document.getElementById("input1");
    let inp2 = document.getElementById("input2");
    p1.innerHTML = inp1.value + " : 0";
    p2.innerHTML = inp2.value + " : 0";
    res.innerHTML = "";
    document.getElementById("ch1").disabled = false;
    l1.style.display = "none";
    document.getElementById("roll1").disabled = true;
    score1 = 0;
    score2 = 0;
}

function exit() {
    win.style.opacity = "0";
    d1.style.display = "block";
    let inp1 = document.getElementById("input1");
    let inp2 = document.getElementById("input2");
    inp1.value = "";
    inp2.value = "";
    bb1.style.display = "none";
    bb2.style.display = "none";
    document.getElementById("start").disabled = false;

    score1 = 0;
    score2 = 0;
    r1 = Math.ceil(Math.random() * 10);

    document.getElementById("pp1").innerHTML = "";
    document.getElementById("pp2").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("chance").innerHTML = "";
    document.getElementById("ch1").disabled = false;
    document.getElementById("roll1").disabled = true;
    document.querySelector(".last").style.display = "none";

    // Reset dice images
    document.getElementById("image1").src = "dice/dice1.png";
    document.getElementById("image2").src = "dice/dice1.png";
}