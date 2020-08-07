import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <p>Navigate the Wax Pokedex!</p>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/detail">Details</Link>
                </li>
            </nav>
        )
    }
}
