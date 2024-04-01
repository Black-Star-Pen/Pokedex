import React from 'react'; 
import PokemonCard from './components/PokemonCard.jsx';
 

 


function App() {

  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      
    },
];

  
   const pokemon = pokemonList[0];
   
   return (
       
        <div className='PokemonCard'>
          <PokemonCard pokemon={pokemon} />
        </div>
       
    );
  }

  

export default App;

