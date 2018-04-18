//********************************************
// COCO II SG editor by Simon Jonassen 2014/16
// use and modify as you see fit...
// just pls remember where it came from
//********************************************
// Updates By Davy Mitchell 2018
//********************************************
'use strict';


function downloadAssembly() {
    var sourceCode = getById("fcbs").value;
    downloadFile('screen.asm', sourceCode);
}

function constructFcb() {
    const noval = 60;	//hex
    getById("fcbs").value = "";
    getById("fcbdata").style.display = "block";
    var fcbval, charval;

    for (var j = 0; j < 16; j++) {
        var fcbline = String.fromCharCode(9) + "fcb" + String.fromCharCode(9);
        for (var i = j * 32; i < j * 32 + 32; i++) {
            var temp = getById("pixel_" + i).innerHTML;
            if (temp === "&nbsp;") {
                fcbval = noval
            }
            else {
                charval = temp.substr(temp.lastIndexOf(".jpg") - 2);
                charval = charval.replace("/", "0");
                fcbval = charval.substr(0, charval.lastIndexOf(".jpg"))
            }
            fcbline += "$" + fcbval + ","
        }
        fcbline = fcbline.substr(0, fcbline.length - 1) + String.fromCharCode(13);
        getById("fcbs").value += fcbline

    }
}

function downloadBasic() {
    var sourceCode = getById("data").value;
    downloadFile('screen.bas', sourceCode);
}

function roundTripData() {
    getById("rtdata").style.display = "block";

    let dataval, charval;
    let csv = '';
    for (let j = 0; j < mode.rows; j++) {
        let dataline = '';
        for (var i = j * mode.columns; i < j * mode.columns + mode.columns; i++) {
            var temp = getById("pixel_" + i).innerHTML;
            charval = temp.substr(temp.lastIndexOf(".jpg") - 2);
            charval = charval.replace("/", "0");
            dataval = charval.substr(0, charval.lastIndexOf(".jpg"));
            dataval = parseInt(dataval, 16);
            dataline += dataval + ","
        }
        csv += dataline + '\n';
    }

    getById("csvdata").value = csv;
}

function importData() {
    let data = getById("csvdata").value.replace('\r\n', '').replace('\n', '').replace('\r', '');
    data = data.split(',');

    for (let i = 0; i < screensize; i++) {
        getById('pixel_' + i).innerHTML = "<IMG src='grafix/" + parseInt(data[i]).toString(16) + ".jpg' border=0 width=20 height=30 draggable='false'>"
    }

}

function constructData() {
    const noval = 60;	//hex
    var fullcode = '10 CLEAR2000:DIMT,A:CLS\r\n';
    fullcode += '20 FORT=1024TO1535:READA:POKET,A:NEXT\r\n';
    fullcode += '100 A$=INKEY$:IFA$="" THEN100\r\n';

    getById("data").value = "";
    getById("basicdata").style.display = "block";
    var lineNo = 1000;
    var dataval, charval;

    for (var j = 0; j < 16; j++) {
        var dataline = "DATA" + String.fromCharCode(32);
        for (var i = j * 32; i < j * 32 + 32; i++) {
            var temp = getById("pixel_" + i).innerHTML;
            if (temp === "&nbsp;") {
                dataval = noval
            }
            else {
                charval = temp.substr(temp.lastIndexOf(".jpg") - 2);
                charval = charval.replace("/", "0");
                dataval = charval.substr(0, charval.lastIndexOf(".jpg"))
            }

            dataval = parseInt(dataval, 16);
            dataline += dataval + ","
        }
        dataline = lineNo + ' ' + dataline.substr(0, dataline.length - 1) + String.fromCharCode(13);

        fullcode += dataline;
        lineNo += 10;
    }
    var progend = "\r\n";
    getById("data").value = fullcode + progend
}