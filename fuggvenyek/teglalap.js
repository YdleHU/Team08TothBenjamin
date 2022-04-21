"use strict";
exports.__esModule = true;
//Téglalap kerület terület kiszámítása
function TeglalapKerTer(a, b) {
    var terulet = 2 * (a + b);
    var kerulet = a * b;
    document.write("<br>A(z) ".concat(a, " "));
    document.write("<br>A(z) ".concat(a, " "));
    document.write("<br>A ker\u00FClete: ".concat(kerulet));
    document.write("<br>A ter\u00FClete: ".concat(terulet));
}
