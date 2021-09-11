const cliente = {
    nome : "Alex",
    idade : 41,
    cpf : 12345678900,
    email : "alexboccia@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

// acessando valores de um objeto através de uma lista (array) de chaves
console.log(cliente[chaves[0]])

// percorrendo nos dados objeto com o método de array foreach
chaves.forEach(info => console.log(cliente[info]))