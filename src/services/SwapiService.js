import axios from "axios";

class SwapiService {

    _apiBase = 'https://swapi.dev/api';
    _imageBase = `https://starwars-visualguide.com/assets/img`;

    getResource = async (url) => {
        try {
            const data = await axios.get(`${this._apiBase}${url}`);
            return data
        } catch (err) {
            console.error(`Could not get resource: ${err.message}`, err.response.status)
        }
    }
    


    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        // console.log('peoples', res.data.results)
        return res.data.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person.data);
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        // console.log('planets', res.data.results)
        return res.data.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        // console.log('planet', planet.data)
        return this._transformPlanet(planet.data);
    }

    getAllStarships = async () => {
        const res =  await this.getResource(`/starships/`);
        return res.data.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship.data);
    }



    getPersonImage = ({ id }) => {
        return `${this._imageBase}/characters/${id}.jpg`
    }

    getStarshipImage = ({ id }) => {
        return `${this._imageBase}/starships/${id}.jpg`
    }

    getPlanetImage = ({ id }) => {
        return `${this._imageBase}/planet/${id}.jpg`
    }



    _extractId(item) { // return ID
        const idRegExp = /[a-zA-Z]*\/(\d+)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {   
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            constInCredits: starship.constInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity,
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        }
    }
}

export default SwapiService;