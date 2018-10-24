//let przycisk = document.getElementById("guzik");
//
//function pobierzImie() {
//   
//    let paragrafy = document.getElementsByTagName("p")
//    
//    paragrafy[0].style.backgroundColor = "red";
//    paragrafy[1].style.backgroundColor = "yellow";
//}
//
//przycisk.addEventListener("click", ustawTlo);

function ustawTlo() {
    let paragrafs = document.getElementsByTagName("p");
    
    paragrafs = Array.from(paragrafs); //przeksztalca 
    
    paragrafs.forEach(function(element, index){
        if (index % 2 == 0){
            element.style.backgroundColor = "red";
        } else {
            element.style.backgroundColor = "green";
        }
    })
}

document.querySelector("button").onclick = ustawTlo;


