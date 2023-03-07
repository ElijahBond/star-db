import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import PeoplePage from "../peoplePage/PeoplePage";
import PlanetsPage from "../planetsPage/PlanetsPage";
import RandomPlanet from "../randomPlanet/RandomPlanet";
import StarshipPage from "../starshipPage/StarshipPage";
import SecretPage from "../pages/secret-page";
import LogingPage from "../pages/login-page";

class App extends Component {
    state = {
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({ isLoggedIn: true })
    }

    render() {

        return (
            <div style={{margin: '0 auto', width: '600px'}}>
                <Header />
                <RandomPlanet />
                    <Routes>
                            <Route path="/" element={ <h2>Welcome</h2> } />
                            <Route path='/people/' element={<PeoplePage />}/>
                            <Route path='/planets/' element={<PlanetsPage />}/>
                            <Route path='/starships/' element={<StarshipPage />}/>
                            <Route 
                                path='/login' 
                                element={
                                    <LogingPage 
                                        isLoggedIn={this.state.isLoggedIn}
                                        onLogin={this.onLogin} replace />
                                }
                                /> 
                            <Route 
                                path='/secret' 
                                element={<SecretPage isLoggedIn={this.state.isLoggedIn} replace />}/> 
                    </Routes>
            </div>
        )
    }
}

export default App;
