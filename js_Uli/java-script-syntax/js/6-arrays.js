let tablica = ["Monika", "Łukasz", "Konrad"];
//console.log(tablica);

tablica[0] = "Karolina";

tablica.unshift("Adam"); // dodaje element na początku
tablica.push("Adam"); // dodaje element na końcu

tablica.shift(); // usuwa element na początku
tablica.pop(); // usuwa element na końcu

//console.log(tablica);


/* 1 - znajdz element pod indexem 1; 
   0 - nic nie usuwaj;
   "Przemek, Lorem" - dodaj "Przemek, Lorem";
*/
//tablica.splice(2, 0, "Przemek", "Loren");


/* 1 - znajdz element pod indexem 1; 
   2 - usuń dwa elementy;
   "Przemek, Lorem" - dodaj "Przemek, Lorem";
*/
//tablica.splice(1, 1, "Przemek", "Loren");

tablica.reverse();

console.log(tablica.join(" + "));

let sorted = [1, 82, 2, 3, 56, 334, 73, 0];
sorted.sort();

console.log(sorted);



