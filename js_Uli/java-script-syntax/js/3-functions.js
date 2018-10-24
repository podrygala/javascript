//let wyswietlImie = function(imie) {
//    return imie;
//}
//
//let wynikWyswietlImie = wyswietlImie("Krystian");
//
//console.log(wynikWyswietlImie);



// ES5 functions

//function dodaj(par1, par2, par3) {
//    let result = par1 + par2 + par3;
//    
//    return result;
//}
//
//console.log(dodaj(1, 2, 3));

//let sum = dodaj(1, 2, 3);
//console.log(sum);




// ES6 functions

// = jeden parametr

//let wyswietlImie = imie => imie;
//
//console.log(wyswietlImie("Ala"));


//więcej niż jeden parametr

//let wyswietlImie = (imie, imie2) => "Imie : " + imie + " imie2 " + imie2; 

let wyswietlImie = (imie, imie2) =>  {
    return "Imie : " + imie + " imie2 " + imie2; 
}

console.log(wyswietlImie("Ala", "Karol"));

