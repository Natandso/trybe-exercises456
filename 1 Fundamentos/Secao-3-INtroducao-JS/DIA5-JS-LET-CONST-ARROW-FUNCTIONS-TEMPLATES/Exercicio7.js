const nomeCompleto = (nome, sobrenome) => {
    return `${nome} ${sobrenome}`
  }
  let nome = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome));


    let speed = 90;
  const speedCar = (speed) => (
    (speed >= 120) ?   'Você ultrapassou o limite de velocidade' : 'Você está na velocidade permitida'
  );
  console.log(speedCar(90));
  
  //forma de fazer direta no console.log
  console.log((speed >= 120) ?   'Você ultrapassou o limite de velocidade' : 'Você está na velocidade permitida')

  
  
