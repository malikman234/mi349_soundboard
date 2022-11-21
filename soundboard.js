function soundCough(){
    var cough = new Audio();
    cough.src="cough_x.wav";
    cough.play();
}
function soundBell(){
    var bell = new Audio();
    bell.src="bicycle_bell.wav";
    bell.play();
}

function soundApplause(){
    var applause = new Audio();
    applause.src="applause3.wav";
    applause.play();
}

document.getElementById("cough").onclick = soundCough;
document.getElementById("cough").onmouseenter = soundCough;

document.getElementById("bell").onclick = soundBell;
document.getElementById("bell").onmouseenter = soundBell;

document.getElementById("applause").onclick = soundApplause;
document.getElementById("applause").onmouseenter = soundApplause;
