const cliente = {
    nome : "Alex",
    idade : 41,
    cpf : "12345678900",
    email : "alexboccia@gmail.com" 
}

// exibe o objeto original
console.log(cliente)

// alterar/atualizar valor do cpf
cliente.cpf = "00987654321"
console.log(cliente);

// criar novo campo no objeto literal com nova chave e valor
cliente.celular = "(11) 98888-7777"
console.log(cliente)

// duas formar de excluir uma propriedade do objeto com o operador delete
delete cliente.idade
delete cliente["cpf"]

console.log(cliente)
