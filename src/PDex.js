import React from 'react';
import PokeItem from './PokeItem';




export default class PDex extends React.Component {
 

    render() {
        return (
            <div> 
                 {
                        this.props.pokeState.map(poke => <PokeItem key={poke._id} pokemon={poke.pokemon} />)
                } 
            </div>
        )
    }
}
