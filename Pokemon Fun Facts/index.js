import {pokemons} from './pokemons'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const title = '';

const background = <img className='background' alt='screen' src={require('./FrontPokedex.png')} />;

const images = [];

for (const pokemon in pokemons) {
  images.push(
    <img
      key={pokemon}
      className='pokemon'
      alt={pokemon}
      src={pokemons[pokemon].image}
      aria-label={pokemon}
      role='button'
      onClick={displayFact}
    />
  )
}

function displayFact(e) {
  const selectedPokemon = e.target.alt;
  const pokemonInfo = pokemons[selectedPokemon];
  const optionIndex = Math.floor(Math.random() * pokemonInfo.facts.length);
  const funFact = pokemonInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}

const pokemonFacts = (
    <div className='background'>
      {background}
      <div className="title">
        <h1>{title === '' ? 'Click an Pokemon for a Fun Fact' : title}</h1>
      </div>
      <p id="fact"></p>
      <div className="pokemons">
        {images}
      </div>
    </div>
);

ReactDOM.render(pokemonFacts, document.getElementById('root'));