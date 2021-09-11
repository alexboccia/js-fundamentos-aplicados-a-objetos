const cliente = {
    nome : "Alex",
    idade : 41,
    cpf : 123345678900,
    email : "alexboccia@gmail.com"
}

// exibir informacao que contém no objeto
console.log(cliente)


// exibir informacoes de chaves específicas, como "nome" e "email", interpolando
// dentro de um template string/literal
console.log(`Meu nome é ${cliente.nome} e meu endereço de e-mail é ${cliente.email}`)


// utilizar o método substring para extrair palavra "boccia" da chave email que 
// consta dentro do objeto cliente
console.log(`Meu sobrenome é ${cliente.email.substring(4, 10)}`)