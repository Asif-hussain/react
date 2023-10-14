import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Pokemon } from '../app/interfaces/pockman';


const PokemonDetails: React.FC = () => {
  const pokemonData: Pokemon | null = useSelector((state: RootState) => state.pokemon.data);

  
  if (pokemonData === null) {
    return <div className="pokemon-details center">No or invalid search...</div>;
  }
  
  return (
    
    <div className="pokemon-details">
      <h3>Pokemon Details</h3>
      <div className="header">
      <div className="detail-section">
                <h5>Pokemon Name: {pokemonData.name}</h5>
            </div>
            <div className="detail-section">
            <h5>Pokemon Order: {pokemonData.order}</h5>
            </div>
      </div>
      {pokemonData ? (
        <div>
          <div className="section">
            <h3>Abilities:</h3>
            <table>
              <thead>
                <tr>
                  <th>Ability Name</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                {pokemonData.abilities.map((ability, index) => (
                  <tr key={index}>
                    <td>{ability.ability.name}</td>
                    <td>{ability.ability.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="section">
            <h4>Moves:</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                {pokemonData.moves.map((move, MovieIndex) => (
                  <tr key={MovieIndex}>
                    <td>{move.move.name}</td>
                    <td>{move.move.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="section">
            <h3>Species:</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pokemonData.species.name}</td>
                  <td>{pokemonData.species.url}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="section">
            <h3>Sprites:</h3>
            <table>
              <thead>
                <tr>
                  <th>back_default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pokemonData.sprites.back_default}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="section">
            <h3>Types:</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                {pokemonData.types.map((type, index) => (
                  <tr key={index}>
                    <td>{type.type.name}</td>
                    <td>{type.type.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>No Pokemon data available.</p>
      )}
    </div>
  );

  
};

export default PokemonDetails;
