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
    var currentSelection = getById(currentchar);
    var newSelection = getById(charval);
    currentchar = charval;
    localStorage.currentchar = currentchar;

    getById('preview').src = 'grafix/' + charval + '.jpg';

    if (currentSelection) {
        currentSelection.style.borderWidth = '1px';
        currentSelection.style.borderStyle = 'solid';
        currentSelection.style.borderColor = 'black';
        currentSelection.style.width = '16px';
        currentSelection.style.height = '24px';
    }

    if (newSelection) {
        newSelection.style.borderWidth = '2px';
        newSelection.style.borderStyle = 'dashed';
        newSelection.style.borderColor = 'red';
        newSelection.style.width = '12px';
        newSelection.style.height = '20px';
    }
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
    if (!window.confirm("Are you sure? This will clear the current drawing.")) {
        return;
    }

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