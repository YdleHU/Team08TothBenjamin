//Old meg a téglalap kerület terület függvényt Tuple típusú visszatérési értékkel!
function TeglalapKeruletTeruletTupleFuggveny(a:number, b:number):[number,number]{
    let kerulet:number=2*(a+b);
    let terulet:number=a*b;
    return [kerulet, terulet];
}