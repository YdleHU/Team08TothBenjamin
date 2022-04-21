"use strict";
exports.__esModule = true;
//PárosE függvény
//szám bemeneti paraméter
//logikai értékkkel kell visszatérnie
function ParosE(szam) {
    var generaltSzam = Math.round(Math.random() * 100);
    document.write("A generált szám: " + generaltSzam + "<br>");
    if (generaltSzam % 2 == 0) {
        document.write("A generált szám páros" + szam);
    }
    else {
        document.write("A generált szám páratlan" + szam);
    }
}
