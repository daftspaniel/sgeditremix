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
}