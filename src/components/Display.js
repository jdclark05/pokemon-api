import React from 'react';
import './display.css';
import background from './images/pokemon_card.png';

const Display = (props) => {
    
    return (
        <div className="mainContainer">                                 
            <div className="pokeCardFront" style={{ backgroundImage: `url(${background})`}}>
            </div>
            {props.pokemonData.map((pokeInfo) => {
                return(
                <div className="pokeCardBack" key={pokeInfo}>
                    <div className="frontHeader">
                        <p className="pokemonName" style={{ letterSpacing: '.2rem'}}>{pokeInfo.name}</p>
                    </div>                     
                    <div className="pokeIMG">
                        <img className="actualIMG" src={pokeInfo.sprites.front_default}/> 
                    </div>                      
                    <div className="Abilities">
                                <p className="abilitiesHeader" style={{ letterSpacing: '.2rem'}}>Abilities:</p>
                        {pokeInfo.abilities.map((item) => {
                            return(
                                <p className="Ability" style={{ letterSpacing: '.2rem'}}>{item.ability.name}</p>
                            )
                        })}
                    </div>                       
                    <div className="baseStats">
                            <p class="stats" style={{ letterSpacing: '.2rem'}}>Base Experience: {pokeInfo.base_experience}</p>
                    </div>
                </div>
                )
            })}
        </div>
    );          
}

export default Display;