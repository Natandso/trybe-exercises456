let clientesTrybeBank = ['Ada', 'John', 'Gus'];


function add(cliente) {
    if (typeof cliente === 'string') {
        clientesTrybeBank.push(cliente)
        return 'cliente adiciona com sucesso'

    } else {
        return 'erro o parametro deve ser uma string';
    }

}

console.log(add(true));
console.log(add('joao'));
console.log(clientesTrybeBank);

function deleteClient(client) {
let clientfinded = false;

    if (typeof client === 'string') {
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (client === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index, 1);
                clientFinded = true;
                return 'Cliente removido com sucesso'
            }

        }
        if (clientfinded === false){
            return 'cliente não encontrado'
        }
    } else {
        return 'erro, não é uma string o parametro passado'
    }
}


console.log(deleteClient(false));
console.log(deleteClient('joao'));
console.log(deleteClient('cesar'));
console.log(clientesTrybeBank);