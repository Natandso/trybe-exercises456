const student1 = {
    name: `Claudia`,
    lastName: `Farias`,
    age: 23,
  }
  
  const student2 = {
    name: `Vitor`,
    age: 20,
  }
  
const getLastName = ({ name,lastName = 'lastName não preenchido',age }) => `${name}, ${lastName}, ${age}`;

  console.log(getLastName(student1));
  console.log(getLastName(student2));