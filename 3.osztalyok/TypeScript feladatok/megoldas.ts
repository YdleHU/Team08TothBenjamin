export { };

function DiakInfo(nev: string, csoport: number, tipus: boolean): string {
    if (tipus) {
        return nev + "Team" + csoport + "Junior Frontend";
    }
    return nev + "Team" + csoport + "Webprogramozó";
}


function SzovegesErtekeles(jegy: number): [string, string] {
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


function HarommalOszthatokSzama(tomb: Array<number>): number {
    let oszthatoE: number = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            oszthatoE++;
        }
    }
    return oszthatoE;
}


function Nyeroszamok(mennyiseg: number, alsoHatar: number, felsoHatar: number): Array<number> {
    let i = 0;
    let nyeroSzamok = [];
    while (i < mennyiseg) {
        let generaltSzam: number = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        let szerepelE: boolean = false;
        for (let j = 0; j < nyeroSzamok.length; j++) {
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
