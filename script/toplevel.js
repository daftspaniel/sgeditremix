//********************************************
// COCO II SG editor by Simon Jonassen 2014/16
// use and modify as you see fit...
// just pls remember where it came from
//********************************************
// Updates By Davy Mitchell 2018
//********************************************
'use strict';

const screensize = 512;
const screenrows = 16;

var grid = false;
var currentchar = '60';
var charToValue = {};
var charList = [];

var mouseDown = true;
var screenData = {};

// GUI
var screenTable;
var characterPalette;
var toolbar;

function init() {
    constructTable(screenrows);
    screenTable = getById('screen-table');
    characterPalette = getById('charpallette');
    toolbar = getById('toolbar');
    setupControlsAndScreen();

    document.getElementsByTagName("BODY")[0].addEventListener("keyup", keyUpEvent);
}

function keyUpEvent(evt) {
    var key = evt.keyCode !== 0 ? evt.keyCode : evt.charCode;
    var current = parseInt(currentchar, 16);

    switch (key) {
        case 83://S
            current += 1;
            if (current > 255) {
                return;
            }
            currentchar = current.toString(16);
            setChar(currentchar);
            break;
        case 87:// W
            current -= 1;
            if (current < 0) {
                current += 256;
            }
            currentchar = current.toString(16);
            setChar(currentchar);
            break;
        case 68:// D
            current += 16;
            if (current > 255) {
                current -= 256;
            }
            setChar(current.toString(16));
            break;
        case 65:// A
            current -= 16;
            if (current < 0) {
                current += 256;
            }
            setChar(current.toString(16));
            break;
    }
}