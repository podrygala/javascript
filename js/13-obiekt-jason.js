let jasonPracownicy = {
    'pracownicy':[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}


jasonPracownicy.pracownicy.forEach(function(pracownik, index) {
    
     console.log(index + ' ' +pracownik.firstName + ' ' +pracownik.lastName)               
})



