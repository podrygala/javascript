let tablica = ["Monika", "Lukasz", "Konrad"];
console.log(tablica);

tablica [0] = "Karolina"
console.log(tablica.length);

tablica.push("Adam"); //dodaje lement na koncu
console.log(tablica);

tablica.unshift("Adam"); //dodaje elemnt na poczatku
console.log(tablica);

tablica.shift(); //usuwa elemnt na poczatku
console.log(tablica);

tablica.pop(); //usuwa element na koncu
console.log(tablica);

tablica.splice(1, 0, "Przemek"); 
console.log(tablica);
/*
0 - nie usuwaj elementu
1,2,3 - znajdz element pod indexem 1
2 - usun dwa elementu 
"Przemek" - dodaj Przemek
*/

console.log(tablica.indexOf("Karolina"));

tablica.reverse();
console.log(tablica);

console.log(tablica.join("+"));


