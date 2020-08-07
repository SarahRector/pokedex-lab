import React, { Component } from 'react'

export default class SearchBar extends Component {
    
    render() {
        
        return (
            <div className='searchBar'>
                <input onChange={this.props.handleChange} />
                <select onChange={this.props.handleSearchBy}>
                    <option value='pokemon'>Name</option>
                    <option value='type'>Type</option>
                    <option value='attack'>Attack</option>
                    <option value='defense'>Defense</option>
                </select>
                <button onClick={this.props.handleClick}>Fetch Wax Pokemon!</button>
                
                
            </div>
        )
    }
}
