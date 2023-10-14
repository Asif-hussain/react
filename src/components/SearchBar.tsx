// src/components/SearchBar.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSearch } from '../app/historySlice';
import { setPokemon } from '../actions/pokemonActions'; // Adjust the path as needed

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
  
    const handleSearch = async () => {
      try {
        // Make an API request using a library like axios or fetch.
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`);
  
        if (!response.ok) {
          throw new Error(`Failed to fetch data for ${searchText}`);
        }
  
        const data = await response.json();
  
        console.log(data)
        // Update the store with the fetched data
        dispatch(setPokemon(data));
  
        // Add the search text to the search history
        dispatch(addSearch(searchText));
  
        // Clear the search input
        setSearchText('');
      } catch (error) {
        console.error('Error while searching:', error);
        // You can add error handling here, e.g., displaying an error message to the user.
      }
    };
  
    return (
      <div>
        <div className="search-bar">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Pokemon"
        />
        <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    );
};

export default SearchBar;
