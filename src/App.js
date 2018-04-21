import React, { Component } from 'react';
import axios from 'axios';

import List from './components/List';
import Header from './components/Header';

import './App.css';

class App extends Component {
    state = {
        currencies: {}
    };

    componentWillMount() {
        this.fetchCurrencies();
    }

    fetchCurrencies() {
        axios.get("https://api.udilia.com/coins/v1/cryptocurrencies/?page=1&perPage=50")
            .then((data) => {
                const currenciesArray = data.data.currencies;

                const currencies = currenciesArray.reduce((obj, item) => {
                    obj[ item.id ] = item;
                    return obj;
                }, {});

                this.setState({ currencies });//JSON.parse(data.data.currencies)
            })
            .catch((error) => {
                console.log("ERROR: ", error);
            });
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <List currencies={this.state.currencies}/>
            </div>
        );
    }
}

export default App;
