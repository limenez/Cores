var corpo = document.getElementById ("corpo");

var cores = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#8B00FF"];

var i=0;

setInterval (() => {
    corpo.style.backgroundColor = cores [i];
    i++;
    if (i == 7) i = 0;
}, 1000);
