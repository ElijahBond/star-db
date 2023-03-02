import axios from "axios";

class SwapiService {

    _apiBase = 'https://swapi.dev/api'

    async getResource(url) {
        try {
            const data = await axios.get(`${this._apiBase}${url}`);
            console.log(data)
        } catch (err) {
            console.error(`Could not get resource: ${err.message}`, err.response.status)
        }
    }

    async getAllPeople() {
        const res = this.getResource(`/people/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`)
    }

    async getAllPlanets() {
        const res = this.getResource(`/planets/`);
        return res.results;
    }

    getPlanets(id) {
        return this.getResource(`/planets/${id}/`)
    }

    async getAllStarships() {
        const res = this.getResource(`/starships/`);
        return res.results;
    }

    getStarships(id) {
        return this.getResource(`/starships/${id}/`)
    }

}

export default SwapiService;