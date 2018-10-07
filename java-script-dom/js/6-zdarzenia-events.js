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









