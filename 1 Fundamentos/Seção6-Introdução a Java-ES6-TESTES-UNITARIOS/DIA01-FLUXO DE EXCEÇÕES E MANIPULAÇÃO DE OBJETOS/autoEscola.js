const studentRegister = (name, age) => {
    try{
    if(!name || !age){
        throw new Error ('Todas as informações são necessárias')
        
        
    }else if (age < 18)  {
        throw new Error ('Ops, infelizmente nesse momento você não pode fazer as aulas')
        
    }else if (age => 18) { 
        return `${name}, seja bem-vindo(a) à AuTrybe!`
        
    }
}
catch (erro) {
return erro.message
    }
     
}

  console.log(studentRegister('Xablau',18));
  console.log(studentRegister('Natan',15));
  console.log(studentRegister());