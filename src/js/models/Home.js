import axios from 'axios';
import { baseUrl } from '../config.js';

export default class Home {
    constructor() {
        this.results = [];
    }

    async getResults() {
        try {
            const res = await axios(`${baseUrl}pokemon/?limit=5`);

            const urls = res.data.results;

            this.results = this.getPokemons(urls);

            console.log('this.results', this.results);
        } catch(e) {
            console.log(e);
        }
    }

    async getPokemons(results) {
        if(results) {
            // await doesnt work inside forEach, so use for loop instead.
            let arrPokemon = [];
            for(const el of results) {
                try {
                    const res = await axios(el.url);

                    if(res) arrPokemon.push(res.data);
                } catch(e) {
                    console.log(e);
                }
            }
            console.log('arrPokemon:', arrPokemon);

            return arrPokemon;
        }
    }


}