import React from 'react';
import PokeItem from './PokeItem';




export default class PDex extends React.Component {

    render() {
        return (
            <div className="pdex"> 
                {
                    
                        this.props.pokeState.map(poke => <PokeItem key={poke._id} pokemon={poke.pokemon} image={poke.url_image}/>)
                }


                        
            
            </div>
        )
    }
}
