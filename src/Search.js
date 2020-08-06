import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.handleChange} />
                <button onClick={this.props.handleClick}>Fetch Pokemon!</button>
            </div>
        )
    }
}
