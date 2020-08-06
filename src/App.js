import React from 'react';
import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Search from './Search.js';
import PDex from './PDex.js';
import request from 'superagent';


class App extends React.Component {
  state = {
    search: '',
    pokeState: [],
    isLoading: false,
  }

    handleClick = async () => {
      this.setState({ isLoading: true })
      const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&pokemon=${this.state.search}`)

      this.setState({
        pokeState: data.body.results,
        isLoading: false})
    }

    handleChange = (e) => {
      this.setState({ search: e.target.value})
}
    
    
  render() {
    return (
      <>
        <Header></Header>
        <Nav></Nav>
        <Search handleClick={this.handleClick} handleChange={this.handleChange}></Search>
        <PDex pokeState={this.state.pokeState}></PDex>
      </>
    )    
  }
}


export default App;
