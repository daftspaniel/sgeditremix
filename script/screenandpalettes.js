//********************************************
// COCO II SG editor by Simon Jonassen 2014/16
// use and modify as you see fit...
// just pls remember where it came from
//********************************************
// Updates By Davy Mitchell 2018
//********************************************
'use strict';

function setupControlsAndScreen() {
    if (localStorage.screenData) {
        screenData = JSON.parse(window.localStorage.screenData);

        for (var i = 0; i < screensize; i++) {
            getById('pixel_' + i).innerHTML = "<IMG src='grafix/" + screenData['pixel_' + i] + ".jpg' border=0 width=20 height=30 draggable='false'>"
        }

    } else {
        clearScreen(60);
    }

    grid = localStorage.grid === 'true';
    if (grid) showGrid(characterPalette, toolbar);

    currentchar = localStorage.currentchar ? window.localStorage.currentchar : '80';

    var path = 'grafix/' + currentchar + '.jpg';
    getById('preview').src = path;

    return i;
}

function constructTable(YRes) {
    var counter = 0;
    var screen = '<TABLE id="screen-table" width=640 height=480  draggable="false" cellpadding=0 cellspacing=0 onmouseleave="mouseDown=false">';
    var coors;
    for (var j = 0; j < mode.rows; j++) {
        screen += "<TR>";
        for (var i = 0; i < mode.columns; i++) {
            coors = "(" + i + "," + j + ")  [" + (i + j * mode.columns) + "]  " + ((i + j * mode.columns) + 1024);
            screen += "<TD name='screencell' ";
            screen += "height=30 width=20 ";
            screen += "id='pixel_" + counter + "' ";
            screen += "onmouseenter='HiLight(" + i + ");dropImage(this.id);event.preventDefault();' ";
            screen += "onmousedown='LoLight(" + i + ");mouseDown=true;dropImage(this.id);' ";
            screen += "onmouseup='mouseDown=false;' ";

            screen += "width='20' style='border:none;' align='center' title='" + coors + "'>" + "&nbsp;" + "</TD>";
            counter++
        }
        screen += "</TR>"
    }
    screen += "</TABLE>";

    getById("screen").innerHTML = screen;
    constructCharset();
    constructColours();

    mouseDown = false;
}


function constructColours() {
    var myHTML = "<TABLE height=480 cellpadding=1 cellspacing=0 style='border:none'>";
    for (var i = 128; i < 144; i++) {
        myHTML += "<TR>";

        for (var j = 0; j < 8; j++) {
            var char = (i + (j * 16)).toString(16);
            myHTML += "<TD style='cursor:pointer'><IMG id=\"" + char + "\" onclick=\"setChar('" + char + "')\" title='chr(" + i + "/#$" + char + ")' src='grafix/" + char + ".jpg' border=1></TD>";
        }
        myHTML += "</TR>"
    }
    myHTML += "</TABLE>";

    getById("sgsel").innerHTML = myHTML

}

function constructCharset() {
    var myHTML = "<TABLE height=480 cellpadding=1 cellspacing=0 style='border:none'>";

    for (var i = 0; i < 16; i++) {
        myHTML += "<TR>";
        for (var j = 0; j < 8; j++) {
            var char = (i + (j * 16)).toString(16);
            myHTML += "<TD style='cursor:pointer'><IMG id=\"" + char + "\" onclick=\"setChar('" + char + "')\" title='chr(" + i + "/#$" + char + ")' src='grafix/" + char + ".jpg' border=1></TD>";
        }
        myHTML += "</TR>"
    }
    myHTML += "</TABLE>";

    getById("charsel").innerHTML = myHTML;
}
