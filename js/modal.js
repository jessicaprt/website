var skillmodal = document.getElementById('skillModal');
var invmodal = document.getElementById('invModal');
var hobmodal = document.getElementById('hobModal');

var skillBtn = document.getElementById("skillBtn");
var invBtn = document.getElementById("invBtn");
var hobBtn = document.getElementById("hobBtn");

var span = document.getElementsByClassName("close")[0];

skillBtn.onclick = function () {
    skillmodal.style.display = "block";
};

invBtn.onclick = function () {
    invmodal.style.display = "block";
};

hobBtn.onclick = function () {
    hobmodal.style.display = "block";
};

span.onclick = function () {
    skillmodal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == skillmodal) {
        skillmodal.style.display = "none";
    }
    
    if (event.target == invmodal) {
        invmodal.style.display = "none";
    }
    
    if (event.target == hobmodal) {
        hobmodal.style.display = "none";
    }
}
