let jsonObject = {
    'employees': [
        {
            'firstName': 'John',
            'lastName': 'Doe',
            'zainteresowania': ["sport", "programowanie"]
        },
        {
            'firstName': 'Anna',
            'lastName': 'Smith'
        },
        {
            'firstName': 'Peter',
            'lastName': 'Jones'
        }
    ]
}
let stringwSrodku = "Jakiś " + "super stringwSrodku -puper " + "string"; 

let test = `Jakiś ${2 + 2} string`;

let pierwszaOsoba = `${jsonObject.employees[0].firstName} ${jsonObject.employees[0].lastName} interesuje się ${jsonObject.employees[0].zainteresowania}`;

console.log(test);