import React from 'react';
import PokeItem from './PokeItem';




export default class PDex extends React.Component {

    render() {
        const {
            pokeState,
            handleNextClick,
            handlePrevClick, 
            currentPage,
            totalPages
        } = this.props;

        return (
            <div>
                {
                    pokeState.length > 0 && <div>
                        {
                            Number(currentPage) !== 1
                            && <button onClick={handlePrevClick}>Prev</button>
                        }
                        {
                            Number(currentPage) !== Number(totalPages) && <button onClick={handleNextClick}>Next</button>
                        }
                        {currentPage} of {totalPages}
            </div>
                }
            <div className="pdex"> 
                {
                    this.props.pokeState.map(poke => <PokeItem key={poke._id} pokemon={poke.pokemon} image={poke.url_image}/>)
                }
            </div>
            </div>
        )
    }
}
