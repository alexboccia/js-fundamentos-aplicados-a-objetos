const cliente = {
    nome : "Alex",
    idade : 41,
    cpf : "12345678900",
    email : "alexboccia@gmail.com",
    fones : ["(11) 98787-0000", "(11) 98888-11111"]
}

// acessar valores de uma lista dentro de um objeto
cliente.fones.forEach(fone => console.log(fone))