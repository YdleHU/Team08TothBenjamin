// hatáskör valtozoNev:tipus = érték;
var szam: number = 5;
var szoveg: string = "Szeretem a programozást";
var logikai: boolean = false; //vagy true értéket vehet fel.

//Speciális változók:

// :any (csak nagyon ritkán használjuk, helyette az:  unknown!)
var barmi: any = "alma";
barmi = 5;
barmi = true;
document.write(barmi);

var ismeretlen: unknown = "alma";
ismeretlen = 5;
ismeretlen = true;
document.write(String(ismeretlen));


var szovegesTomb1: string[] = ["alma", "körte", "szilva", "barack"];
var szovegesTomb2: Array<string> = ["fps", "tps", "rts", "szimulátor"];
var szamTomb: Array<number> = [3, 15, 13, 21, 42];



