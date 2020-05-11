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

            this.getPokemons(urls);
        } catch(e) {
            console.log(error);
        }
    }

    async getPokemons(results) {
        if(results) {
            // await doesnt work inside forEach, so use for loop instead.
            for(const el of results) {
                try {
                    const res = await axios(el.url);

                    this.results.push(res.data);
                } catch(e) {
                    console.log(e);
                }
            }
        }
    }


}