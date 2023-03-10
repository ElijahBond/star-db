import React, { Component } from "react";

import SwapiService from '../../services/SwapiService';
import ErrorIndicator from "../errorIndicator/ErrorIndicator";
import Spinner from "../spinner/Spinner";

import './randomPlanet.css';

class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, 400000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false})
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet, loading, error } = this.state;

        const hasContent = !(loading || error)

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? 
            (<div className="spinner">
                <Spinner />
            </div>) 
            : null;

        const content = hasContent ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                { spinner }
                { content }
            </div>
        )
    }
};

export default RandomPlanet;

const PlanetView = ({ planet }) => {

    const { name, 
        population, 
        rotationPeriod, 
        diameter, 
        id
        } = planet;

    return (
        <>
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
        </>
    )
}