import React, { Component } from "react";

import Header from "../header/Header";
import ItemList from "../itemList/ItemList";
import PersonDetails from "../personDetails/PersonDetails";
import RandomPlanet from "../randomPlanet/RandomPlanet";

class App extends Component {

    state = {
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        return (
            <div style={{margin: '0 auto', width: '600px'}}>
                <Header />
                <RandomPlanet />
                
                <div className="row mb2">
                    <div className="">
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
