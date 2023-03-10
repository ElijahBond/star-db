import React, { Component } from "react";

import SwapiService from "../../services/SwapiService";

import './itemDetails.css';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span> - {item[field]}</span>
        </li>
    )
};

export {
    Record
}

class ItemDetails extends Component {
    
    swapiService = new SwapiService();

    state = {
        item: null,
        image: null
        
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.item !== prevProps.item) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then(item => {
                this.setState({ 
                    item,
                    image: getImageUrl(item) })
            })
    }

    render() {

        const { item, image } = this.state;

        if (!item) {
            return <span>Select item from a list</span>
        };

        const { name } = item;
                
        return (
            <div className="item-details card">
                <img
                    className="item-image"
                    src={image}
                    alt="some item"
                    style={{ width: '200px', margin: '10px auto 0 auto', borderRadius: '10px'}} />

                <div className="card-body description">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        { 
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item});
                            } )
                        }
                    </ul>
                </div>
            </div>
        )
    }
};

export default ItemDetails;