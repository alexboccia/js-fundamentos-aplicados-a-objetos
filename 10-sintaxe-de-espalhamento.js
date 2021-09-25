const cliente = [
{
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
    ]
},
{
    nome : 'Naiara',
    idade : 35,
    cpf : '12345678900',
    email : 'naiara@gmail.com',
    fones : ['(11) 98787-0000', '(11) 98888-11111'],
    dependentes : 
    [
        {
            nome : 'Sophie',
            parentesco : 'filha',
            dataNasc : '10/10/2010'
        }
    ]
}
]

// operador de espalhamento '...'
const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes];

// console.log(listaDependentes);

// exibir dados tabulados dentro de uma tabela
console.table(listaDependentes);