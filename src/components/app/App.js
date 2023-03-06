import React, { Component } from "react";

import Header from "../header/Header";
import PeoplePage from "../peoplePage/PeoplePage";
import RandomPlanet from "../randomPlanet/RandomPlanet";

class App extends Component {

    render() {

        return (
            <div style={{margin: '0 auto', width: '600px'}}>
                <Header />
                <RandomPlanet />
                
                <PeoplePage />
            </div>
        )
    }
}

export default App;
