//********************************************
// COCO II SG editor by Simon Jonassen 2014/16
// use and modify as you see fit...
// just pls remember where it came from
//********************************************
// Updates By Davy Mitchell 2018
//********************************************
'use strict';

function getById(id) {
    return document.getElementById(id);
}

function downloadFile(filename, contents) {
    var downloader = document.createElement('a');
    downloader.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contents));
    downloader.setAttribute('download', filename);
    downloader.click();
}

function hideById(id) {
    getById(id).style.display = 'none';
}

function showById(id) {
    getById(id).style.display = 'block';
}