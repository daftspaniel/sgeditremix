//********************************************
// COCO II SG editor by Simon Jonassen 2014/16
// use and modify as you see fit...
// just pls remember where it came from
//********************************************
// Updates By Davy Mitchell 2018
//********************************************
const screensize = 512
var currentchar = 60
var grid = false
var mouseDown = true

function dropImage(id) {
    if (currentchar !== -1 && mouseDown) {
        //console.log('DI mouseDown',mouseDown)
        window.requestAnimationFrame(function () {
            document.getElementById(id).innerHTML = "<IMG src='grafix/" + currentchar + ".jpg' border=0 width=20 height=30>"
        });
    }
}

function setChar(charval) {
    currentchar = charval
    path = 'grafix/' + charval + '.jpg'
    //document.body.style.cursor = "url(" + path + "), auto";

}

function HiLight(id) {
    document.getElementById("pixel_" + id).style.backgroundColor = "#cccccc"
}

function LoLight(id) {
    document.getElementById("pixel_" + id).style.backgroundColor = "#80ff80"
}


function constructTable(YRes) {
    var counter = 0
    var myHTML = '<TABLE id="screen-table" width=640 height=480 cellpadding=0 cellspacing=0 onmouseleave="console.log(1066);mouseDown=false">'
    var coors
    for (var j = 0; j < YRes; j++) {
        myHTML += "<TR>"
        for (var i = 0; i < 32; i++) {
            coors = "(" + i + "," + j + ") [" + (i + j * 32) + "] " + ((i + j * 32) + 1024)
            myHTML += "<TD name='screencell' "//ondragover='dropImage(this.id)'"
            myHTML += "height=30 width=20 "// onclick='dropImage(this.id)'"
            myHTML += "id='pixel_" + counter + "' "
            myHTML += "onmouseenter='console.log(34);dropImage(this.id);event.preventDefault();' "
            myHTML += "onmousedown='console.log(99);mouseDown=true;dropImage(this.id);console.log(1,mouseDown)' "
            //
            //
            myHTML += "onmouseup='console.log(123);mouseDown=false;' "
            //myHTML += "onmouseup='console.log(44);mouseDown=false;' "
            //"onmouseover='HiLight(" + counter + ")' onmouseout='LoLight(" + counter + ")'"
            myHTML += "width='20' style='border:none;' align='center' title='" + coors + "'>" + "&nbsp;" + "</TD>"
            counter++
        }
        myHTML += "</TR>"
    }
    myHTML += "</TABLE>"

    document.getElementById("screen").innerHTML = myHTML
    constructColours()
    constructCharset()
    currentchar = '60'
    for (var i = 0; i < screensize; i++) {
        dropImage('pixel_' + i)
    }
    mouseDown = false
}


function constructColours() {
    var myHTML = "<TABLE height=480 cellpadding=1 cellspacing=0 style='border:none'>"
    for (var i = 128; i < 144; i++) {
        myHTML += "<TR>"
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + i.toString(16) + "')\" title='chr(" + i + "/#$" + i.toString(16) + ")' src='grafix/" + i.toString(16) + ".jpg' border=1></TD>"
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 16).toString(16) + "')\" title='chr(" + (i + 16) + "/#$" + (i + 16).toString(16) + ")' src='grafix/" + (i + 16).toString(16) + ".jpg' border=1></TD>"
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 32).toString(16) + "')\" title='chr(" + (i + 32) + "/#$" + (i + 32).toString(16) + ")' src='grafix/" + (i + 32).toString(16) + ".jpg' border=1></TD>"
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 48).toString(16) + "')\" title='chr(" + (i + 48) + "/#$" + (i + 48).toString(16) + ")' src='grafix/" + (i + 48).toString(16) + ".jpg' border=1></TD>"

        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 64).toString(16) + "')\" title='chr(" + (i + 64) + "/#$" + (i + 64).toString(16) + ")' src='grafix/" + (i + 64).toString(16) + ".jpg' border=1></TD>"
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 80).toString(16) + "')\" title='chr(" + (i + 80) + "/#$" + (i + 80).toString(16) + ")' src='grafix/" + (i + 80).toString(16) + ".jpg' border=1></TD>"
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 96).toString(16) + "')\" title='chr(" + (i + 96) + "/#$" + (i + 96).toString(16) + ")' src='grafix/" + (i + 96).toString(16) + ".jpg' border=1></TD>"
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 112).toString(16) + "')\" title='chr(" + (i + 112) + "/#$" + (i + 112).toString(16) + ")' src='grafix/" + (i + 112).toString(16) + ".jpg' border=1></TD>"
        myHTML += "</TR>"
    }
    myHTML += "</TABLE>"

    document.getElementById("sgsel").innerHTML = myHTML

}

function constructCharset() {
    var myHTML = "<TABLE height=480 cellpadding=1 cellspacing=0 style='border:none'>"

    for (var i = 0; i < 16; i++) {
        myHTML += "<TR>"
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + i.toString(16) + "')\" title='chr(" + i + "/#$" + i.toString(16) + ")' src='grafix/" + i.toString(16) + ".jpg' border=1></TD>"
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 16).toString(16) + "')\" title='chr(" + (i + 16) + "/#$" + (i + 16).toString(16) + ")' src='grafix/" + (i + 16).toString(16) + ".jpg' border=1></TD>"
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 32).toString(16) + "')\" title='chr(" + (i + 32) + "/#$" + (i + 32).toString(16) + ")' src='grafix/" + (i + 32).toString(16) + ".jpg' border=1></TD>"
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 48).toString(16) + "')\" title='chr(" + (i + 48) + "/#$" + (i + 48).toString(16) + ")' src='grafix/" + (i + 48).toString(16) + ".jpg' border=1></TD>"

        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 64).toString(16) + "')\" title='chr(" + (i + 64) + "/#$" + (i + 64).toString(16) + ")' src='grafix/" + (i + 64).toString(16) + ".jpg' border=1></TD>"
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 80).toString(16) + "')\" title='chr(" + (i + 80) + "/#$" + (i + 80).toString(16) + ")' src='grafix/" + (i + 80).toString(16) + ".jpg' border=1></TD>"
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 96).toString(16) + "')\" title='chr(" + (i + 96) + "/#$" + (i + 96).toString(16) + ")' src='grafix/" + (i + 96).toString(16) + ".jpg' border=1></TD>"
        myHTML += "<TD style='cursor:pointer'><IMG onclick=\"setChar('" + (i + 112).toString(16) + "')\" title='chr(" + (i + 112) + "/#$" + (i + 112).toString(16) + ")' src='grafix/" + (i + 112).toString(16) + ".jpg' border=1></TD>"
        myHTML += "</TR>"
    }
    myHTML += "</TABLE>"

    document.getElementById("charsel").innerHTML = myHTML

}

function constructFcb() {
    const noval = 60	//hex
    document.getElementById("fcbs").value = ""
    document.getElementById("fcbdata").style.display = "block"

    for (var j = 0; j < 16; j++) {
        fcbline = String.fromCharCode(9) + "fcb" + String.fromCharCode(9)
        for (var i = j * 32; i < j * 32 + 32; i++) {
            temp = document.getElementById("pixel_" + i).innerHTML
            if (temp == "&nbsp;") {
                fcbval = noval
            }
            else {
                charval = temp.substr(temp.lastIndexOf(".jpg") - 2)
                charval = charval.replace("/", "0")
                fcbval = charval.substr(0, charval.lastIndexOf(".jpg"))
            }
            fcbline += "$" + fcbval + ","
        }
        fcbline = fcbline.substr(0, fcbline.length - 1) + String.fromCharCode(13)
        document.getElementById("fcbs").value += fcbline

    }
}


function constructData() {
    const noval = 60	//hex
    document.getElementById("data").value = ""
    document.getElementById("basicdata").style.display = "block"

    for (var j = 0; j < 16; j++) {
        dataline = "data" + String.fromCharCode(32)
        for (var i = j * 32; i < j * 32 + 32; i++) {
            temp = document.getElementById("pixel_" + i).innerHTML
            if (temp == "&nbsp;") {
                dataval = noval
            }
            else {
                charval = temp.substr(temp.lastIndexOf(".jpg") - 2)
                charval = charval.replace("/", "0")
                dataval = charval.substr(0, charval.lastIndexOf(".jpg"))
            }

            dataval = parseInt(dataval, 16)
            dataline += dataval + ","
        }
        dataline = dataline.substr(0, dataline.length - 1) + String.fromCharCode(13)
        document.getElementById("data").value += dataline

    }
}


function hidefcb() {
    document.getElementById("fcbdata").style.display = "none"
}


function hidedata() {
    document.getElementById("basicdata").style.display = "none"
}

function clearScreen(color) {
    if (color != 0) {
        for (var i = 0; i < screensize; i++) {
            document.getElementById("pixel_" + i).innerHTML = "<IMG src='grafix/" + color + ".jpg' border=0 width=20 height=30>"
        }
        document.getElementById("cls").selectedIndex = 0
    }
}

function showGrid(characterPalette) {
    var cell
    characterPalette.style.left = '855px'

    screenTable.width = 722
    screenTable.height = 600

    for (var i = 0; i < screensize; i++) {
        cell = document.getElementById("pixel_" + i)
        cell.style.border = '1px solid black';
        cell.style.maxWidth = '24px'
        cell.style.maxHeight = '34px'
        cell.style.height = '34px'
    }
    return;
}

function hideGrid(characterPalette) {
    var cell
    for (var i = 0; i < screensize; i++) {
        cell = document.getElementById("pixel_" + i)
        cell.style.border = '';
        cell.style.maxWidth = '20px'
        cell.style.maxHeight = '30px'
        cell.style.height = '30px'
    }
    screenTable.width = 640
    screenTable.height = 480
    screenTable.cellPadding = 0
    screenTable.cellSpacing = 0
    characterPalette.style.left = '755px'
}

function toggleGrid() {
    grid = !grid
    screenTable = document.getElementById('screen-table');

    var characterPalette = document.getElementById('charpallette');
    if (grid) {
        showGrid(characterPalette);
        return
    }
    hideGrid(characterPalette);
}

document.onmouseup = function () {
    console.log('hmm', mouseDown)
    mouseDown = false;
}