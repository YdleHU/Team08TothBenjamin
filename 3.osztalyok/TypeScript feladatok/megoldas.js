"use strict";
exports.__esModule = true;
function DiakInfo(nev, csoport, tipus) {
    if (tipus) {
        return nev + "Team" + csoport + "Junior Frontend";
    }
    return nev + "Team" + csoport + "Webprogramozó";
}
function SzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return ["Példás", "Példás"];
    }
    else if (jegy == 4) {
        return ["Jó", "Jó"];
    }
    else if (jegy == 3) {
        return ["Változó", "Változó"];
    }
    else if (jegy == 2) {
        return ["Hanyag", "Rossz"];
    }
    else {
        return ["Hiba", "Hiba"];
    }
}
function HarommalOszthatokSzama(tomb) {
    var oszthatoE = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            oszthatoE++;
        }
    }
    return oszthatoE;
}
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var i = 0;
    var nyeroSzamok = [];
    while (i < mennyiseg) {
        var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        var szerepelE = false;
        for (var j = 0; j < nyeroSzamok.length; j++) {
            if (nyeroSzamok[j] == generaltSzam) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            nyeroSzamok.push(generaltSzam);
            i++;
        }
    }
    return nyeroSzamok;
}
