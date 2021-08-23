import React, { Component } from 'react'
import Pokecard from './Pokecard'

class PokemondexMain extends Component {
    render() { 
        return ( 
            <div>
                <Pokecard 
                    id={4}
                    name='Charmander'
                    type='fire'
                    exp={62}
                />
            </div>
         );
    }
}
 
export default PokemondexMain;