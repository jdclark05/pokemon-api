import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import './App.css';
import appBackground from './components/images/gamer.png';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  const pokemonFinder = ( data ) => {
    setPokemonData( [ data ] );
  }

  const styles = {
        backgroundImage: `url(${appBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        width: '100vw',
        height: '65rem'
  };

  return (      
      <div className="appMain" style={styles}>
        <Form onGetPoke={ pokemonFinder }/>
        <Display pokemonData={ pokemonData } />
      </div>
 
  );
}

export default App;
