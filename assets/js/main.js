const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//Promise
//Quando fazemos uma requisição, ela demora x tempo para retornar
//É a promessa de um resultado
//Conforme a busca é executado, se der tudo certo, irá retornar uma resposta

//Caso ocorra erro, utilize o catch para fazer algum procedimento em relação a ele

//Por fim, utiliza o finally para realizar algum procedimento 
//ao final de uma requisição, independente do resultado dela

//Interface de um Promise foi baseada no bloco Try-Catch-Finally
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))    
    .catch((error) => console.error(error))
