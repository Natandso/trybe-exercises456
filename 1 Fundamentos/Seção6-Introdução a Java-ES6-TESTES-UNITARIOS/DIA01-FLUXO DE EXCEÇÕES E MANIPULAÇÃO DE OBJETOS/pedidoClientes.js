const clients = [
    {
        name: 'João da Silva',
        age: 28,
        email: 'joao.silva@gmail.com',
        phone: '(11) 5555-5555',
        address: {
            street: 'Rua dos Lírios',
            number: 123,
            neighborhood: 'Jardim Primavera',
            city: 'São Paulo',
            state: 'SP',
            cep: '01234-567',
        },
    },
    {
        name: 'Maria Souza',
        age: 35,
        email: 'maria.souza@hotmail.com',
        address: {
            street: 'Rua dos Cravos',
            number: 456,
            neighborhood: 'Copacabana',
            city: 'Rio de Janeiro',
            state: 'RJ',
            cep: '12345-678',
        },
    },
    {
        name: 'Pedro Oliveira',
        age: 42,
        email: 'pedro.oliveira@gmail.com',
        address: {
            street: 'Rua das Margaridas',
            number: 789,
            neighborhood: 'Boa Viagem',
            city: 'Recife',
            state: 'PE',
            cep: '23456-789',
        },
    },
    {
        name: 'Ana Santos',
        age: 25,
        email: 'ana.santos@gmail.com',
        phone: '(71) 5555-5555',
        address: {
            street: 'Rua dos Girassóis',
            number: 1011,
            neighborhood: 'Barra',
            city: 'Salvador',
            state: 'BA',
            cep: '34567-890',
        },
    },
    {
        name: 'Luiz Costa',
        age: 32,
        email: 'luiz.costa@hotmail.com',
        address: {
            street: 'Rua das Acácias',
            number: 1213,
            neighborhood: 'Centro',
            city: 'Belo Horizonte',
            state: 'MG',
            cep: '45678-901',
        },
    },
    {
        name: 'Isabela Almeida',
        age: 37,
        email: 'isabela.almeida@gmail.com',
        phone: '(21) 5555-5555',
        address: {
            street: 'Rua das Hortênsias',
            number: 1415,
            neighborhood: 'Botafogo',
            city: 'Rio de Janeiro',
            state: 'RJ',
            cep: '56789-012',
        },
    },
    {
        name: 'Rafael Ferreira',
        age: 29,
        email: 'rafael.ferreira@hotmail.com',
        address: {
            street: 'Rua das Orquídeas',
            number: 1617,
            neighborhood: 'Pinheiros',
            city: 'São Paulo',
            state: 'SP',
            cep: '67890-123',
        },
    },
];

// função para retornar o endereço da ana
const findPersonByName = (name) => {
    let pessoa;
    try {
        for (let index = 0; index < clients.length; index += 1) {
            if (clients[index].name === name) {
                pessoa = clients[index]
            }
        }
        if (!pessoa) {
            throw new Error('Pessoa não encontrada, tente novamente')
        }
        const recebeNome = `Destinatário: ${pessoa.name}`
        const recebeEndereço = `Endereço: ${pessoa.address.street}, ${pessoa.address.number}, ${pessoa.address.neighborhood}, ${pessoa.address.city}, ${pessoa.address.state}`
        const cep = `CEP: ${pessoa.address.cep}.`
        return `${recebeNome}, ${recebeEndereço}, ${cep}`
    } catch (error) {
        return error.message
    }
};
//função achar pessoa pelo numero do array
const findPersonByPosition = (position) => {
    let posição = clients[position]
    try {

        if (!posição) {
            throw new Error('Posição inválida, tente novamente')
        }
        const nome = `Cliente: ${posição.name} `
        const email = `email: ${posição.email}`
        return `${nome} ${email}`
    } catch (error) {
        return error.message
    }
};
//funções para: ver e o array esta vazio para retornar o erro e a segunda função retorna os nomes das pessaos que moram naquele estado
const verificaArray = (array) => {
    if (array.length === 0) {
        throw new Error('Ops, nenhuma pessoa mora nesse estado, tente outro')

    }
}

const findPeopleByState = (state) => {
    try {
        const estado = [];
        for (let index = 0; index < clients.length; index += 1) {
            if (clients[index].address.state === state) {
                estado.push(clients[index].name);
            }
        }
        verificaArray(estado)
        return estado
    } catch (error) {
        return error.message
    }
};

console.log(findPersonByName('Ana Santos')); // Fluxo completo
console.log(findPersonByName('Ana Silva')); // Fluxo de exceção


console.log(findPersonByPosition(6)); // Fluxo completo
console.log(findPersonByPosition(10)); // Fluxo de exceção

console.log(findPeopleByState('SP'));
console.log(findPeopleByState('GG'));