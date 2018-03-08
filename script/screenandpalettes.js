//********************************************
// COCO II SG editor by Simon Jonassen 2014/16
// use and modify as you see fit...
// just pls remember where it came from
//********************************************
// Updates By Davy Mitchell 2018
//********************************************
'use strict';

function constructTable(YRes) {
    var counter = 0;
    var screen = '<TABLE id="screen-table" width=640 height=480  draggable="false" cellpadding=0 cellspacing=0 onmouseleave="mouseDown=false">';
    var coors;
    for (var j = 0; j < YRes; j++) {
        screen += "<TR>";
        for (var i = 0; i < 32; i++) {
            coors = "(" + i + "," + j + ")  [" + (i + j * 32) + "]  " + ((i + j * 32) + 1024);
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

    document.getElementById("screen").innerHTML = screen;
    constructColours();
    constructCharset();

    currentchar = '80';
    var path = 'grafix/' + currentchar + '.jpg';
    document.getElementById('preview').src = path;

    if (window.localStorage.screenData) {
        screenData = JSON.parse(window.localStorage.screenData);

        for (i = 0; i < screensize; i++) {
            document.getElementById('pixel_' + i).innerHTML = "<IMG src='grafix/" + screenData['pixel_' + i] + ".jpg' border=0 width=20 height=30 draggable='false'>"
        }

    } else {
        clearScreen(60);
    }

    mouseDown = false;
}


function constructColours() {
    var myHTML = "<TABLE height=480 cellpadding=1 cellspacing=0 style='border:none'>";
    for (var i = 128; i < 144; i++) {
        myHTML += "<TR>";
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + i.toString(16) + "')\" title='chr(" + i + "/#$" + i.toString(16) + ")' src='grafix/" + i.toString(16) + ".jpg' border=1></TD>";
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 16).toString(16) + "')\" title='chr(" + (i + 16) + "/#$" + (i + 16).toString(16) + ")' src='grafix/" + (i + 16).toString(16) + ".jpg' border=1></TD>";
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 32).toString(16) + "')\" title='chr(" + (i + 32) + "/#$" + (i + 32).toString(16) + ")' src='grafix/" + (i + 32).toString(16) + ".jpg' border=1></TD>";
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 48).toString(16) + "')\" title='chr(" + (i + 48) + "/#$" + (i + 48).toString(16) + ")' src='grafix/" + (i + 48).toString(16) + ".jpg' border=1></TD>";

        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 64).toString(16) + "')\" title='chr(" + (i + 64) + "/#$" + (i + 64).toString(16) + ")' src='grafix/" + (i + 64).toString(16) + ".jpg' border=1></TD>";
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 80).toString(16) + "')\" title='chr(" + (i + 80) + "/#$" + (i + 80).toString(16) + ")' src='grafix/" + (i + 80).toString(16) + ".jpg' border=1></TD>";
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 96).toString(16) + "')\" title='chr(" + (i + 96) + "/#$" + (i + 96).toString(16) + ")' src='grafix/" + (i + 96).toString(16) + ".jpg' border=1></TD>";
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 112).toString(16) + "')\" title='chr(" + (i + 112) + "/#$" + (i + 112).toString(16) + ")' src='grafix/" + (i + 112).toString(16) + ".jpg' border=1></TD>";
        myHTML += "</TR>"
    }
    myHTML += "</TABLE>";

    document.getElementById("sgsel").innerHTML = myHTML

}

function constructCharset() {
    var myHTML = "<TABLE height=480 cellpadding=1 cellspacing=0 style='border:none'>";

    for (var i = 0; i < 16; i++) {
        myHTML += "<TR>";
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + i.toString(16) + "')\" title='chr(" + i + "/#$" + i.toString(16) + ")' src='grafix/" + i.toString(16) + ".jpg' border=1></TD>";
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 16).toString(16) + "')\" title='chr(" + (i + 16) + "/#$" + (i + 16).toString(16) + ")' src='grafix/" + (i + 16).toString(16) + ".jpg' border=1></TD>";
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 32).toString(16) + "')\" title='chr(" + (i + 32) + "/#$" + (i + 32).toString(16) + ")' src='grafix/" + (i + 32).toString(16) + ".jpg' border=1></TD>";
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 48).toString(16) + "')\" title='chr(" + (i + 48) + "/#$" + (i + 48).toString(16) + ")' src='grafix/" + (i + 48).toString(16) + ".jpg' border=1></TD>";

        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 64).toString(16) + "')\" title='chr(" + (i + 64) + "/#$" + (i + 64).toString(16) + ")' src='grafix/" + (i + 64).toString(16) + ".jpg' border=1></TD>";
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 80).toString(16) + "')\" title='chr(" + (i + 80) + "/#$" + (i + 80).toString(16) + ")' src='grafix/" + (i + 80).toString(16) + ".jpg' border=1></TD>";
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 96).toString(16) + "')\" title='chr(" + (i + 96) + "/#$" + (i + 96).toString(16) + ")' src='grafix/" + (i + 96).toString(16) + ".jpg' border=1></TD>";
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 112).toString(16) + "')\" title='chr(" + (i + 112) + "/#$" + (i + 112).toString(16) + ")' src='grafix/" + (i + 112).toString(16) + ".jpg' border=1></TD>";
        myHTML += "</TR>"
    }
    myHTML += "</TABLE>";

    document.getElementById("charsel").innerHTML = myHTML

}
