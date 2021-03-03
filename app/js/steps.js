
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const netx1 = document.getElementById("next1");
const netx2 = document.getElementById("next2");
const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");

const progress = document.getElementById("progress");

//funtion

netx1.onclick = function(){
    form1.style.left = "-550px";
    form2.style.left = "0px";
    progress.style.width = "66%";
}

back1.onclick = function(){
    form1.style.left = "0px";
    form2.style.left = "550px";
    progress.style.width = "33%";
}

next2.onclick = function(){
    form2.style.left = "-550px";
    form3.style.left = "0px";
    progress.style.width = "100%";
}

back2.onclick = function(){
    form2.style.left = "0px";
    form3.style.left = "550px";
    progress.style.width = "66%";
}