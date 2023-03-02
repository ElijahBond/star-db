import React, { Component } from "react";

import './randomPlanet.css';

class RandomPlanet extends Component {
    render() {
        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                    src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
                    alt="some planet" />
                <div>
                    <h4>Planet name</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>123123</span>
                        </li>

                        <li className="list-group-item">
                            <span className="term">Rotation period</span>
                            <span>43</span>
                        </li>

                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>100</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default RandomPlanet;