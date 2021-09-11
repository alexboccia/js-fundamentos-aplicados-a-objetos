const cliente = {
    nome : "Alex",
    idade : 41,
    cpf : "12345678900",
    email : "alexboccia@gmail.com",
    fones : ["(11) 98787-0000", "(11) 98888-11111"]
}

// criar nova propriedade dependente
cliente.dependentes = {
    nome : "Naiara",
    parentesco : "filha",
    dataNasc : "10/101/2010"
}

console.log(cliente)

// atualizar valor dentro da propriedade do objeto
cliente.dependentes.nome = "Naiara Xavier"

console.log(cliente)