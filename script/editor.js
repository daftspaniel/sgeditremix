//********************************************
// COCO II SG editor by Simon Jonassen 2014/16
// use and modify as you see fit...
// just pls remember where it came from
//********************************************
// Updates By Davy Mitchell 2018
//********************************************
'use strict';

function dropImage(id) {
    if (currentchar !== -1 && mouseDown) {
        window.requestAnimationFrame(function () {
            getById(id).innerHTML = "<IMG src='grafix/" + currentchar + ".jpg' border=0 width=20 height=30 draggable='false'>"
        });
        screenData[id] = currentchar;
        localStorage.screenData = JSON.stringify(screenData);
    }
}

function setChar(charval) {
    currentchar = charval;
    var path = 'grafix/' + charval + '.jpg';
    getById('preview').src = path;
    localStorage.currentchar = currentchar;
}

function HiLight(id) {
    //document.getElementById("pixel_" + id).style.border = "1px sold black"
    //document.getElementById("pixel_" + id).parentNode.style.border = "10px solid black"
    //document.getElementById("pixel_" + id).innerHTML.firstChild.innerHTML = "<div style='width: 20px;height:30px'><b>!</b></div>"
}

function LoLight(id) {
    //document.getElementById("pixel_" + id).style.backgroundColor = "#80ff80"
}

function clearScreen(color) {
    if (color !== 0) {
        for (var i = 0; i < screensize; i++) {
            getById("pixel_" + i).innerHTML = "<IMG src='grafix/" + color + ".jpg' border=0 width=20 height=30>";
            screenData["pixel_" + i] = color;
        }
        getById("cls").selectedIndex = 0;
        localStorage.screenData = JSON.stringify(screenData);
    }
}

document.onmouseup = function () {
    mouseDown = false;
};