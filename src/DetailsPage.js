import React, { Component } from 'react';
import request from 'superagent';
import Nav from './Nav';
import Header from './Header';

export default class DetailsPage extends Component {
    state = { pokemon: null }

    componentDidMount = async () => {
        const name = this.props.match.params.myPokemonId;

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`)

        const pokemon = data.body.results[0];
console.log(pokemon);
        this.setState({ pokemon: pokemon })
    }
    render() {
        const {pokemon} = this.state
        return (
            <div>
                <Header />
                <Nav />
                {
                    pokemon
                        ? <div className='detailPoke'>
                        <p>Hello, Human! My name is {pokemon.pokemon}.</p>
                        <p>Type: {pokemon.type_1}</p>
                        <p>Ability: {pokemon.ability_1}</p>
                        <p>Defense: {pokemon.defense}</p>
                        <p>Attack: {pokemon.attack}</p>
                        <img src={pokemon.url_image} alt={pokemon.pokemon} />
                    </div>
                        : <h1>loading</h1>
                }
                
            </div>
        )
    }
}
