const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

let offset = 0
const limit = 5
const maxRecords = 151



function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons =  []) =>{
        const newHtml = pokemons.map(pokemon => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                
                <button id="detailsBtn">details</button>
            </li>
        `).join('')

        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qntRecordNextPage = offset + limit
     
    if(qntRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset 
        loadPokemonItens(offset,newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else {
        loadPokemonItens(offset,limit)
    }
    
})