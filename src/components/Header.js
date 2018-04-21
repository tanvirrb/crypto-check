import React from 'react';
import logo from './logo.svg';

import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Crypto Currency Update</h1>
                </header>
            </div>
        )
    }
}

export default Header;