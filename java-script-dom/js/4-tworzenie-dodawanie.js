let istniejacyWezel = document.getElementById("parFirst");

let newParagraf = document.createElement("p"); //--> stworzenie pustego p

//let newParagrafText = document.createTextNode("Tekst z Java Script'u"); //--> tutaj dodany tekst
//newParagraf.appendChild(newParagrafText);

newParagraf.appendChild(document.createTextNode("Tekst z Java Script'u"));
newParagraf.setAttribute("class", "custom-class") //dodawanie klasy do paragrafu
newParagraf.removeAttribute("class"); //- usuwanie klasy

istniejacyWezel.appendChild(newParagraf);
//istniejacyWezel.removeChild(newParagraf);

console.log(newParagraf)

//console.log(istniejacyWezel);

