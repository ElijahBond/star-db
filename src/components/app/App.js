import React, { Component } from "react";

import Header from "../header/Header";
import PeoplePage from "../peoplePage/PeoplePage";
import RandomPlanet from "../randomPlanet/RandomPlanet";
import { SwapiServiceProvider } from '../swapi-service-context/Swapi-service-context';

class App extends Component {

    render() {

        return (
            <div style={{margin: '0 auto', width: '600px'}}>
                <Header />
                <RandomPlanet />
                
                <SwapiServiceProvider value={this.swapiService}>
                    <PeoplePage />
                </SwapiServiceProvider>
            </div>
        )
    }
}

export default App;
