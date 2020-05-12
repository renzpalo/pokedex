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

            this.results = urls;
        } catch(e) {
            console.log(error);
        }
    }
}