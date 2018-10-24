function ustawTlo() {

    let paragrafs = document.getElementsByTagName("p");
//    
//    paragrafs = Array.from(paragrafs); // przekształca HTML Collection to arrays
//     
//    paragrafs.forEach(function(element, index) {
//        if (index % 2 == 0) {
//            element.style.backgroundColor = "red";
//        } else {
//            element.style.backgroundColor = "green";
//        } 
//    })
    paragrafs[0].style.backgroundColor = "red";
    paragrafs[1].style.backgroundColor = "green";
}

document.querySelector("button").onclick = ustawTlo;