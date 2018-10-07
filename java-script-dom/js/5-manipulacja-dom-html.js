let tablicaParagrafow = document.querySelectorAll("#parSecond p");
//tablicaParagrafow.forEach();

tablicaParagrafow.forEach(function(element, index) {
    element.setAttribute("class", "pierwsza-klasa");
//    element.style.color = "red";
//    element.innerHTML = "Nowy tekst"; // tylko tekst
//    element.outerHTML = "<a href='#'>Teraz Link</a>"; //text oraz tagi <></>
    
});

let allLinks = document.getElementsByClassName("link"); //tablica ze wszystkimi linkami
allLinks[1].href = "https://www.google.com";
allLinks[1].classList.addClass("google-class"); //dodaje nowa klase

console.log(allLinks[1].classList);

console.log(allLinks);
//console.log(tablicaParagrafow);