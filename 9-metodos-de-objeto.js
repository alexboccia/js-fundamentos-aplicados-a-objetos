const cliente = {
    nome : 'Alex',
    idade : 41,
    cpf : '12345678900',
    email : 'alexboccia@gmail.com',
    fones : ['(11) 98787-0000', '(11) 98888-11111'],
    dependentes : 
    [
        {
            nome : 'Naiara',
            parentesco : 'filha',
            dataNasc : '10/10/2010'
        },
        {
            nome : 'Neusa',
            parentesco : 'Mãe',
            dataNasc : '01/01/2000'
        }
    ],
    saldo : 100,
    
    depositar : function (valor) {
        this.saldo += valor
    }
}

function oferecerSeguro(obj) {
    // listar todas as chaves do objeto cliente
    const propsClientes = Object.keys(cliente);

    if(propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro para ${obj.nome}`);
    }
}

oferecerSeguro(cliente);

// listar todos os valores do objeto
// console.log(Object.values(cliente));

// listar os valores do objeto dentro de um array
//console.log(Object.entries(cliente));
