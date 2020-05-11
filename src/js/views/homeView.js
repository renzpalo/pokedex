import { elements } from './domElements';

const renderPokemons = pokemon => {
    const markup = `<div class="col-sm-3">
                        <div class="card m-1">
                            <img class="card-img-top" src="" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${pokemon.name}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>`;

    elements.pokemonPanel.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = pokemons => {
    pokemons.forEach(el => {
        renderPokemons(el);
    });
}