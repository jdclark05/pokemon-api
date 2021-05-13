import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import './App.css';
import appBackground from './components/images/mainBG.png';
import appBackground2 from './components/images/PikachuBG.png';

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
        height: '110rem'
  };

  const styles2 = {
    backgroundImage: `url(${appBackground2})`,
    backgroundSize: 'cover'
  }

  return (      
      <div className="appMain" style={styles}>
        <div className="contentContainer" style ={styles2}>
          <div className="pokePlacer">
            <Form onGetPoke={ pokemonFinder }/>
            <Display pokemonData={ pokemonData } />
          </div>
        </div>
      </div>
 
  );
}

export default App;
