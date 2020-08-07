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
        currentPage: 1,
        totalPages: 1
        }

        componentDidMount = async () => {
            const params = new URLSearchParams(this.props.location.search);

            const searchBy = params.get('searchBy');
            const page = params.get('page');
            const search = params.get('search');

            if (searchBy && page && search) {
                await this.setState({
                    searchBy: searchBy,
                    currentPage: page,
                    search: search
                });
            }

            await this.makeRequest()
        }

        makeRequest = async () => {
            this.setState({ isLoading: true })
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchBy}=${this.state.search}`)
    
            await this.setState({
            pokeState: data.body.results,
            totalPages: Math.ceil(data.body.count / 20),
            isLoading: false})

            const params = new URLSearchParams(this.props.location.search);

            params.set('search', this.state.search);
            params.set('searchBy', this.state.searchBy);
            params.set('page', this.state.currentPage);

            this.props.history.push('?' + params.toString())
        }

        
    
        handleClick = async (e) => {
            e.preventDefault();

            await this.setState({
                currentPage: 1
            })
            await this.makeRequest()
        }
    
        handleChange = (e) => {
            this.setState({ search: e.target.value})
        }

        handleSearchBy = (e) => {
            this.setState({ searchBy: e.target.value})
        }

        handleNextClick = async () => {
            await this.setState({ currentPage: Number(this.state.currentPage) + 1 })

            await this.makeRequest();
        }

        handlePrevClick = async () => {
            await this.setState({ currentPage: Number(this.state.currentPage) - 1 })

            await this.makeRequest();
        }
    
    
        render() {
            const {
                currentPage,
                totalPages,
            } = this.state;

            return (
            <div className="pageBody"> 
                <Header></Header>
                <Nav></Nav>
                <SearchBar handleClick={this.handleClick} handleChange={this.handleChange} handleSearchBy={this.handleSearchBy}></SearchBar>
                <PDex pokeState={this.state.pokeState} handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick}
                currentPage={currentPage}
                totalPages={totalPages} />
        </div>
        )    
    }
}
    
    


