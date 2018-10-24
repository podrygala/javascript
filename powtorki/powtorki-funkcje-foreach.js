//function pobierzDane() {
//    //pobieranie danych AJAX
//    
//    var dane = [
//        {
//            id: 10021,
//            name: "Przykład 1",
//        },
//
//        {
//            id: 10022,
//            name: "Przykład 2",
//        },
//
//        {
//            id: 10023,
//            name: "Przykład 3",
//        }
//
//    ];
//    
//    if(dane) {
//        wyswietlDane(dane);
//    }
//}
//
//function wyswietlDane(data) {
//    let output = document.getElementById('output');
//    
//    let html = "";
//    
//    data.forEach(function(el, ind){
//        html += "<p>ID:" + el.id + ", NAME: " + el.name + "<p>";
//    });
//    
//    output.innerHTML = html;
//}
//
//pobierzDane();
//
//let noweDane = [
//    {
//    id: 1,
//    name: "Adam",
//},
//    
//{
//    id: 2,
//    name: "Kazimierz",
//}
//]
//


function pobierzDane() {
    //pobieranie danych AJAX
    
    var dane = [
        {
            id: 10021,
            name: "Przykład 1",
        },

        {
            id: 10022,
            name: "Przykład 2",
        },

        {
            id: 10023,
            name: "Przykład 3",
        }

    ];
    
    if(dane) {
        return dane;
    } 
    
    return false;
}

function wyswietlDane(data) {
    let output = document.getElementById('output');
    
    let html = "";
    
    data.forEach(function(el, ind){
        html += "<p>ID:" + el.id + ", NAME: " + el.name + "<p>";
    });
    
    output.innerHTML = html;
}

var pobraneDane = pobierzDane();
wyswietlDane(pobraneDane);
console.log(pobraneDane);



