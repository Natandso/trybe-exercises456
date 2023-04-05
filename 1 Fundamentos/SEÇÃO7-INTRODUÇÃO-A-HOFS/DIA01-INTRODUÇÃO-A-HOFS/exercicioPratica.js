const newEmployees = (back) => {
    const employees = {
      id1: back('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: back('Luiza Drummond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: back('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const criaEmail = (fullname) => {
const email = fullname.toLowerCase().replace(' ', '_')
return {fullname, email:`${email}@trybe.com` };
};

console.log(newEmployees(criaEmail));

