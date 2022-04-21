export { };

//Téglalap kerület terület kiszámítása
function TeglalapKerTer(a: number, b: number): void {
    let terulet = Math.round(Math.random() * 10);
    let kerulet = Math.round(Math.random() * 10);
    document.write("A téglalap [a] oldala:" + a + "<br>");
    document.write("A téglalap [b] oldala:" + b + "<br>");
    document.write("<br>Téglalap kerülete: " + kerulet);
    document.write("<br>Téglalap területe: " + terulet);
}

