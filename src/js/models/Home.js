import axios from 'axios';
import { baseUrl } from '../config.js';

export default class Home {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${baseUrl}pokemon/`);

            this.results = res.data.results;
            console.log('Pokemon', this.results);
        } catch(e) {
            console.log(error);
        }
    }
}