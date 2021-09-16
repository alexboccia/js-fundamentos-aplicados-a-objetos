const cliente = {
    nome : 'Alex',
    idade : 41,
    cpf : '12345678900',
    email : 'alexboccia@gmail.com',
    fones : ['(11) 98787-0000', '(11) 98888-11111'],
    dependentes : [{
        nome : 'Naiara',
        parentesco : 'filha',
        dataNasc : '10/10/2010'
    }]
}

// utilizando métodos de array para adicionar dados no último índice
cliente.dependentes.push({
    nome : 'Neusa Boccia',
    parentesco : 'Mãe',
    dataNasc : '13/01/1952'
})

console.log(cliente)

// recuperando o dado pela data de nascimento

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '10/10/2010')

console.log(filhaMaisNova[0].nome)