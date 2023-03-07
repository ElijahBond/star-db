import React, { Component } from "react";

import Row from '../Row/Row';
import SwapiService from "../../services/SwapiService";
import ItemList from "../itemList/ItemList";
import ItemDetails, { Record } from "../itemDetails/ItemDetails";
import { SwapiServiceConsumer } from "../swapi-service-context/Swapi-service-context";

class StarshipPage extends Component {

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
                getData={this.swapiService.getAllStarships}
                renderItem={({ name, gender}) => `${name} (${gender})`} 
            />
        );

        const pesonDetails = (
                        <ItemDetails 
                            itemId={3} //this.state.selectedPerson
                            getData={this.swapiService.getStarship}
                            getImageUrl={this.swapiService.getStarshipImage}
                            >

                            <Record field='gender' label='Gender' />
                            <Record field='eyeColor' label='Eye Color' />
                        </ItemDetails>
        )


        return (
            <Row left={itemList} right={pesonDetails}  />
        )
    };
};

export default StarshipPage;