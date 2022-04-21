export { };

//Téglalap kerület terület kiszámítása
function TeglalapKerTer(a: number, b: number): void {
    var terulet: number = 2 * (a + b);
    var kerulet: number = a * b;
    document.write(`<br>A(z) ${a} `);
    document.write(`<br>A(z) ${a} `);
    document.write(`<br>A kerülete: ${kerulet}`);
    document.write(`<br>A területe: ${terulet}`);
}

