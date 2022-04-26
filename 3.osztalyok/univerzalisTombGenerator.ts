//Univerzális Tömb generátor, TypeScript-ben
function UniverzalisTombGenerator(meret:number, alsoHatar:number, felsoHatar:number): Array<number>{
    let generaltTomb: Array<number>=[];
    for(let i=0;i<meret;i++)
    {
        generaltTomb.push(Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar);
    }
    return generaltTomb;
}