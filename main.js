function printTimer() {
    var elemnt = document.getElementById('printtimer');
    setInterval(() => { elemnt.innerText += "timer" + "\n" }, 4000)
}
printTimer();


printCounter()

function printCounter() {
var counter = 0;
    var elemntcounter = document.getElementById('printcounter');
    setInterval(() => { elemntcounter.innerText += (counter ++) +"\n"}, 6000 )
}

var inrvaelid;
function printILove() {
    var elemnttext = document.getElementById('printtext');
    inrvaelid = setInterval(() => { elemnttext.innerText += "i love timers" + "\n" }, 2000)
}
printILove();


function stopPrint() {
    clearInterval(inrvaelid)
}


var namesarray = ["shlomo", "shimon", "sara", "ran"];
var stopinrtveal;
function printNames() {
    var i =0;
    stopinrtveal = setInterval(() => { document.getElementById('printname').innerText += namesarray[i]  + "\n" }, 2000);
    i++;

}
printNames()

function tsopPrintNames() {
    clearInterval(stopinrtveal)
}


function printTime() {
    setInterval(() => {
        var newdate;

        newdate = new Date()
        printtime1.innerHTML = newdate.getHours() + ":" + newdate.getMinutes() + ":" + newdate.getSeconds() + "<br>"
    }, 1000)
}
printTime();



var intervalid;
function printTime() {
    var dateobject = new Date();
    var secondsfromdate = dateobject.getSeconds();
    var secondsfrominput = parseInt(timeinput.value.substr(6));

    var minutefromdate = dateobject.getMinutes();
    var minutefrominput = parseInt(timeinput.value.substr(3, 2));

    var hoursfromdate = dateobject.getHours();
    var hoursfrominput = parseInt(timeinput.value.substr(0, 2));

    intervalid = setInterval(() => {
        timeelemnt.innerHTML = hoursfromdate + ":" + minutefromdate + ":" + secondsfromdate++;

        if (secondsfromdate == 60) {
            secondsfromdate = 0;
            minutefromdate++;
            if (minutefromdate == 60) {
                minutefromdate = 0;
                hoursfromdate++;
                if (hoursfromdate == 24) {
                    hoursfromdate = 0;
                }
            }

        }
        if (dateobject.getTime() == dateobject.setHours(hoursfrominput,minutefrominput,secondsfrominput))
        console.log("time up"); {
            clearInterval(intervalid);
        }

    }, 1000)

}





var conter = 0;
var intervaid;
var h1_print = document.getElementById('h1_print');
function printText() {
    intervaid = setInterval(() => {
        h1_print.innerHTML = "You are on the site!" + conter++;
    }, 1000)
}

function stop() {
    clearInterval(intervaid);
}

function satrtAndSTOP() {
    if (print_btn.innerText == "start") {
        print_btn.innerText = "stop";
        printText();
    }
    else {
        print_btn.innerText = "start";
        stop();
    }

}


settimouts

function printName() {
    var myname = document.getElementById('printname');
    setTimeout(() => {
        myname.innerText = "SHLOMO HAILO"
    }, 7000)
}
printName();



var helloprint = document.getElementById('printhello');

function frintHello() {
    setTimeout(() => {
        helloprint.innerText = "HELLO";
    }, 5000)
    printBey();
}
frintHello()

function printBey() {
    helloprint.innerText = "bey";
}



var minuts = document.getElementById('time');
var newdate = new Date();
var minutstimes = newdate.getMinutes();
function printTime() {
    setTimeout(() => {
        minuts.innerHTML = minutstimes;
    }, 1500)

}
printTime();




var settimeid;

function frintLoveTime() {
    settimeid = setTimeout(() => {
        document.getElementById('printilove').innerText = "I LOVE TIMERS";

    }, 10000)
}
frintLoveTime();


function stopprint() {
    clearTimeout(settimeid)
}




function cahngecolorrored() {
    setTimeout(() => {
        document.getElementById('cotort').style.color = "red"

    }, 3000)
}
cahngecolorrored()