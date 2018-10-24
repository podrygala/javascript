let istniejacyWezel = document.getElementById("parFirst");

let newParagraf = document.createElement("p") // --> <p></p>
//let newParagrafText = document.createTextNode("Tekst z Java Script'u"); // --> Tekst ....
//newParagraf.appendChild(newParagrafText); // --> wstawi Tekst w <p></p>


newParagraf.appendChild(document.createTextNode("Tekst z Java Script'u"));
newParagraf.setAttribute("class", "custom-class"); // dodaje atrybut
newParagraf.removeAttribute("class"); // usuwa atrybut

istniejacyWezel.appendChild(newParagraf); // wstawia w strukturę HTML
//istniejacyWezel.removeChild(newParagraf);

//console.log(newParagraf);

//console.log(istniejacyWezel);