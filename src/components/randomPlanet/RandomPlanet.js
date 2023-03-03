import React, { Component } from "react";

import SwapiService from '../../services/SwapiService';

import './randomPlanet.css';

class RandomPlanet extends Component {

    swapiService = new SwapiService();
    
    constructor() {
        super();
        this.updatePlanet()
    }

    state = {
        planet: {}
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet})
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
    }

    render() {

        const { planet: {name, population, rotationPeriod, diameter, id} } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    alt="some planet" />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>

                        <li className="list-group-item">
                            <span className="term">Rotation period</span>
                            <span>{rotationPeriod}</span>
                        </li>

                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default RandomPlanet;