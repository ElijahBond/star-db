import React, { Component } from "react";

import Row from '../Row/Row';
import SwapiService from "../../services/SwapiService";
import ItemList from "../itemList/ItemList";
import ItemDetails, { Record } from "../itemDetails/ItemDetails";
import { SwapiServiceConsumer } from "../swapi-service-context/Swapi-service-context";

class PlanetsPage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPlanets}
                renderItem={({ name, gender}) => `${name} (${gender})`} 
            />
        );

        const pesonDetails = (
                        <ItemDetails 
                            itemId={1} //this.state.selectedPerson
                            getData={this.swapiService.getPlanet}
                            getImageUrl={this.swapiService.getPlanetImage}>

                            <Record field='gender' label='Gender' />
                            <Record field='eyeColor' label='Eye Color' />
                        </ItemDetails>
        )


        return (
            <Row left={itemList} right={pesonDetails} />
        )
    };
};

export default PlanetsPage;