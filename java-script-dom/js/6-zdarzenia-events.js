//add events by html DOM

let naszH2 = document.querySelector("#sectionFirst > h2");

function pokazNaClicku() {
    console.log(naszH2.innerHTML);
}

naszH2.onclick = pokazNaClicku;

//add events by addEventListener

let mainHeader = document.querySelector("#main-header");

function mouseOverEvent() {
        mainHeader.style.color = "red";
}

function mouseOutEvent() {
        mainHeader.style.color = "green";
}

mainHeader.addEventListener("mouseover", mouseOverEvent)
mainHeader.addEventListener("mouseout", mouseOutEvent)

mainHeader.removeEventListener("mouseover", mouseOverEvent);
mainHeader.removeEventListener("mouseout", mouseOutEvent);

// ZABLKOWANIE DZIALANIA LINKU - preventDefault()

let superLink = document.getElementById("superlink");

function zablokuj(domyslneZachowanie) {
    domyslneZachowanie.preventDefault();
    console.log("click");
} 

superLink.onclick = zablokuj;

// stopPropagation()

function clickHeader() {
    console.log("Klikniecie w <header>");
}

function clickH1(domyslneZachowanie) {
    domyslneZachowanie.stopPropagation();
    console.log("Klikniecie w <h1>");
}

document.querySelector("header").onclick = clickHeader;
document.querySelector("#main-header").onclick = clickH1;











