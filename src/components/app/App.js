import Header from "../header/Header";
import ItemList from "../itemList/ItemList";
import PersonDetails from "../personDetails/PersonDetails";
import RandomPlanet from "../randomPlanet/RandomPlanet";

const App = () => {
    return (
        <div style={{margin: '0 auto', width: '600px'}}>
            <Header />
            <RandomPlanet />
            
            <div className="row mb2">
                <div className="">
                    <ItemList />
                </div>
                <div className="">
                    <PersonDetails />
                </div>
            </div>
        </div>
    )
}

export default App;
