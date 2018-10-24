let tablicaParagrafow = document.querySelectorAll("#parSecond p");

//tablicaParagrafow.forEach();

tablicaParagrafow.forEach(function(element, index) {
    element.setAttribute("class", "pierwsza-klasa");
//    element.innerHTML = "Nowy tekst"; // tylko tekst ...
//    element.outerHTML = "<a href='#'>Teraz link</a><br />"; // text oraz tagi <></>.....
});

let allLinks = document.getElementsByClassName("link"); // [] ze wszystkimi linkami

allLinks[1].href = "https://www.google.com/";
allLinks[1].classList.add("google-class"); // dodaje nową klasę

//console.log(allLinks[1].classList);
//
//allLinks[1].classList.add("fa"); // dodaje nową klasę
//console.log(allLinks[1].classList);

console.log(allLinks);

//console.log(tablicaParagrafow);