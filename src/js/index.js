import 'bootstrap';
import '../scss/style.scss';

// Models
import Home from './models/Home';

// Views
import * as homeView from './views/homeView';

const state = {};

// Home Controller
const controlHome = async () => {
    state.home = new Home();

    try {
        await state.home.getResults();

        console.log(state.home.results);

        homeView.renderResults(state.home.results);
    } catch(e) {
        console.log(e);
    }
}

// Display pokemons when the window loads
window.addEventListener('load', controlHome);