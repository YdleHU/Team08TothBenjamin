"use strict";
exports.__esModule = true;
//Téglalap kerület terület kiszámítása
function TeglalapKerTer(a, b) {
    var terulet = Math.round(Math.random() * 10);
    var kerulet = Math.round(Math.random() * 10);
    document.write("A téglalap [a] oldala:" + a + "<br>");
    document.write("A téglalap [b] oldala:" + b + "<br>");
    document.write("<br>Téglalap kerülete: " + kerulet);
    document.write("<br>Téglalap területe: " + terulet);
}
