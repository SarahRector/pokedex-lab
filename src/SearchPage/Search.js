import React, { Component } from 'react';
import '../App.css';
import request from 'superagent';
import Header from '../Header';
import Nav from '../Nav.js';
import PDex from '../PDex.js';
import SearchBar from './SearchBar';

export default class Search extends Component {
    state = {
        search: '',
        pokeState: [],
        isLoading: false,
        searchBy: 'pokemon',
        }
    
        handleClick = async () => {
            this.setState({ isLoading: true })
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=100&${this.state.searchBy}=${this.state.search}`)
    
            this.setState({
            pokeState: data.body.results,
            isLoading: false})
        }
    
        handleChange = (e) => {
            this.setState({ search: e.target.value})
        }

        handleSearchBy = (e) => {
            this.setState({ searchBy: e.target.value})
        }
    
    
        render() {

            return (
            <div className="pageBody"> 
                <Header></Header>
                <Nav></Nav>
                <SearchBar handleClick={this.handleClick} handleChange={this.handleChange} handleSearchBy={this.handleSearchBy}></SearchBar>
                <PDex pokeState={this.state.pokeState}></PDex>
        </div>
        )    
    }
}
    
    


