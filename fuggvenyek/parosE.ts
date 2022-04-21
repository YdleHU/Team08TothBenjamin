export { };

//PárosE függvény
//szám bemeneti paraméter
//logikai értékkkel kell visszatérnie

function ParosE(szam: number): boolean {
    if (szam % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}