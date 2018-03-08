//********************************************
// COCO II SG editor by Simon Jonassen 2014/16
// use and modify as you see fit...
// just pls remember where it came from
//********************************************
// Updates By Davy Mitchell 2018
//********************************************
'use strict';

var grid = false;

function showGrid(characterPalette, toolbar) {
    var cell;
    characterPalette.style.left = '855px';
    toolbar.style.left = '855px';

    screenTable.width = 722;
    screenTable.height = 600;

    for (var i = 0; i < screensize; i++) {
        cell = document.getElementById("pixel_" + i);
        cell.style.border = '1px solid darkgrey';
        cell.style.maxWidth = '24px';
        cell.style.maxHeight = '34px';
        cell.style.height = '34px'
    }

}

function hideGrid(characterPalette, toolbar) {
    var cell;
    for (var i = 0; i < screensize; i++) {
        cell = document.getElementById("pixel_" + i);
        cell.style.border = '';
        cell.style.maxWidth = '20px';
        cell.style.maxHeight = '30px';
        cell.style.height = '30px'
    }
    screenTable.width = 640;
    screenTable.height = 480;
    screenTable.cellPadding = 0;
    screenTable.cellSpacing = 0;
    characterPalette.style.left = '755px';
    toolbar.style.left = '755px'
}

function toggleGrid() {
    grid = !grid;

    if (grid) {
        showGrid(characterPalette, toolbar);
        return
    }
    hideGrid(characterPalette, toolbar);
}