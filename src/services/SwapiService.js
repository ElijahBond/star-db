import axios from "axios";

class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        try {
            const data = await axios.get(`${this._apiBase}${url}`);
            return data
        } catch (err) {
            console.error(`Could not get resource: ${err.message}`, err.response.status)
        }
    }
    


    async getAllPeople() {
        const res = this.getResource(`/people/`);
        return res.data.map(this._transformPerson);
    }

    getPerson(id) {
        const person = this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.data.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const res =  await this.getResource(`/starships/`);
        return res.data.map(this._transformPerson);
    }

    getStarship(id) {
        const starship = this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }



    _extractId(item) { // return ID
        const idRegExp = /planets\/(\d+)\/$/;
        return item.data.url.match(idRegExp)[1];
    };

    _transformPlanet(planet) {   
        return {
            id: this._extractId(planet),
            name: planet.data.name,
            population: planet.data.population,
            rotationPeriod: planet.data.rotation_period,
            diameter: planet.data.diameter,
        }
    }

    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.data.name,
            model: starship.data.model,
            manufacturer: starship.data.manufacturer,
            constInCredits: starship.data.constInCredits,
            length: starship.data.length,
            crew: starship.data.crew,
            passengers: starship.data.passengers,
            cargoCapacity: starship.data.cargoCapacity,
        }
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.data.name,
            gender: person.data.gender,
            birthYear: person.data.birthYear,
            eyeColor: person.data.eyeColor,
        }
    }
}

export default SwapiService;