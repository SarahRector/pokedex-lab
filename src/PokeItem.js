import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.pokemon}</p>
            </div>
        )
    }
}
