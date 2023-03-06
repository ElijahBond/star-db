import React, { Component } from "react";

import Row from '../Row/Row';
import SwapiService from "../../services/SwapiService";
import ItemList from "../itemList/ItemList";
import PersonDetails from "../personDetails/PersonDetails";

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
            <PersonDetails personId={this.state.selectedPerson} />
        )


        return (
            <Row left={itemList} right={pesonDetails} />
        )
    };
};

export default PeoplePage;