import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
    render() {
        return (
            <Link to={`/detail/${this.props.pokemon}`}>
            <div>
                <p>{this.props.pokemon}</p>
                <img src={this.props.image} alt='pokemon'></img>

            </div>
            </Link>
        )
    }
}
