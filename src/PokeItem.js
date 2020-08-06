import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.pokemon}</p>
                <img src={this.props.image} alt='pokemon'></img>
                <p>Main Ability: {this.props.ability}</p>
                <p>Type: {this.props.type}</p>
            </div>
        )
    }
}
