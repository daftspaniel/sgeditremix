
function constructFcb() {
    const noval = 60;	//hex
    document.getElementById("fcbs").value = "";
    document.getElementById("fcbdata").style.display = "block";

    for (var j = 0; j < 16; j++) {
        fcbline = String.fromCharCode(9) + "fcb" + String.fromCharCode(9);
        for (var i = j * 32; i < j * 32 + 32; i++) {
            temp = document.getElementById("pixel_" + i).innerHTML;
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
        document.getElementById("fcbs").value += fcbline

    }
}


function constructData() {
    const noval = 60;	//hex
    var fullcode = '10 CLEAR2000:DIMT,A:CLS\r\n'
    fullcode += '20 FORT=1024TO1535:READA:POKET,A:NEXT\r\n'
    fullcode += '100 A$=INKEY$:IFA$="" THEN100\r\n'

    document.getElementById("data").value = "";
    document.getElementById("basicdata").style.display = "block";
    var lineNo = 1000;
    for (var j = 0; j < 16; j++) {
        dataline = "DATA" + String.fromCharCode(32);
        for (var i = j * 32; i < j * 32 + 32; i++) {
            temp = document.getElementById("pixel_" + i).innerHTML;
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

        fullcode += dataline
        lineNo += 10
    }
    var progend = "\r\n";
    document.getElementById("data").value = fullcode + progend
}