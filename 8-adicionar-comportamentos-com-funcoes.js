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
    // adicionar comportamento ao objeto através da funcao
    // funcoes são métodos quando implementadas no contexto de objeto 
    depositar : function (valor) {
        // this(isso) esta instancia de objeto "cliente"
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)