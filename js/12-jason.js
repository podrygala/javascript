let jasonObject = {
    'employees': [
        {
            'firstName': 'John',
            'lastName': 'Doe',
            'hobby': ["music", "programowanie"],
        },
        
        {
            'firstName': 'Anna',
            'lastName': 'Smith',
        },
        
        {
            'firstName': 'Peter',
            'lastName': 'Jones',
        }
    ]
}

let firstPerson = `${jasonObject.employees[0].firstName} ${jasonObject.employees[0].lastName} interesuje sie ${jasonObject.employees[0].hobby} `;








console.log(firstPerson);