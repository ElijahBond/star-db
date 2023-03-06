import React, { Component } from "react";

import Row from '../Row/Row';
import SwapiService from "../../services/SwapiService";
import ItemList from "../itemList/ItemList";
import ItemDetails, { Record } from "../itemDetails/ItemDetails";
import { SwapiServiceConsumer } from "../swapi-service-context/Swapi-service-context";

class PeoplePage extends Component {

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
                getData={this.swapiService.getAllPeople}
                renderItem={({ name, gender}) => `${name} (${gender})`} 
            />
        );

        const pesonDetails = (
            <SwapiServiceConsumer>
                {
                    ({ getPerson, getPersonImage}) => {
                        <ItemDetails 
                            itemId={3} //this.state.selectedPerson
                            getData={getPerson}
                            getImageUrl={getPersonImage}>

                            <Record field='gender' label='Gender' />
                            <Record field='eyeColor' label='Eye Color' />
                        </ItemDetails>
                    }
                }
            </SwapiServiceConsumer>
        )


        return (
            <Row left={itemList} right={pesonDetails} />
        )
    };
};

export default PeoplePage;