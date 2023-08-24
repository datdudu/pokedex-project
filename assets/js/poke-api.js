const pokeApi = {

}

function convertPokeApiDetailToPokemon(pokeDetails) {
    const pokemon = new Pokemon()
    pokemon.id = pokeDetails.id
    pokemon.name = pokeDetails.name

    const types = pokeDetails.types.map((typeSlot) => typeSlot.type.name)
    const[type1] = types

    pokemon.types = types
    pokemon.type = type1
    pokemon.photo = pokeDetails.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
                .then((response) => response.json())
                .then(convertPokeApiDetailToPokemon)
}

//Promise
//Quando fazemos uma requisição, ela demora x tempo para retornar
//É a promessa de um resultado
//Conforme a busca é executado, se der tudo certo, irá retornar uma resposta

//Caso ocorra erro, utilize o catch para fazer algum procedimento em relação a ele

//Por fim, utiliza o finally para realizar algum procedimento 
//ao final de uma requisição, independente do resultado dela

//Interface de um Promise foi baseada no bloco Try-Catch-Finally
pokeApi.getPokemons = (offset = 0,limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
                .then((response) => response.json())
                .then((jsonBody) => jsonBody.results)
                .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
                .then((detailRequest) => Promise.all(detailRequest))
                .then((pokemonDetails) => pokemonDetails)
}



