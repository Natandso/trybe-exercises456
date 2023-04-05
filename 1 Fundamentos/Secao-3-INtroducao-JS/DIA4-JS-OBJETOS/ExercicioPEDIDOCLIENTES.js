let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};


function customerInfo(order) {
    let nome = order.order.delivery.deliveryPerson;
    console.log('olá, ' + nome + ' entrega para: ' + order.name + ', Telefone: ' + order.phoneNumber + ', R.' + order.address.street + ', N: ' + order.address.number + ', AP: ' + order.address.apartment);
}

customerInfo(order);

function orderModifier(order) {
    let bebida = order.order.drinks.coke.type;
    order.name = 'Luiz Silva';
    order.payment.total = 50;
    let pizzas = Object.keys(order.order.pizza); 
    console.log('Olá, ' + order.name + ', o valor total de  seu pedido de ' + pizzas[0] + ', ' + pizzas[1] + ' e ' + bebida + ' é R$ '  + order.payment.total + ',00.');
}
orderModifier(order);

/* Complete a função orderModifier() para que seu retorno seja similar a 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
Modifique o nome da pessoa compradora para Luiz Silva;
Modifique o valor total da compra para R$ 50,00 */