let diasDaSemana = {
  1: 'domingo',
  2: 'segunda-feira',
  3: 'terça-feira',
  4: 'quarta-feira',
  5: 'quinta-feira',
  6: 'sexta-feira',
  7: 'sábado',
};

console.log(diasDaSemana['5']); // domingo


let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars);
}


let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index,car[index]);
  }



  let customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  customer1.lastName = 'Faria';
  
  let customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  console.log(customer2);

  customer2['lastName'] = 'Silva';
  console.log(customer2);



  let person = {
    name:'Roberto',
  };
  
  let lastName = {
    lastName: 'Silva',
  };
  
  let newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);