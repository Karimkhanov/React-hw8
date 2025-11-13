import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { rickAndMortyService } from '../services/rickAndMortyService';
import CharacterCard from '../components/CharacterCard';
import Spinner from '../components/Spinner';
import ErrorBox from '../components/ErrorBox';
import './CharacterList.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query) {
      setLoading(true);
      setError(null);
      rickAndMortyService.searchCharacters(query)
        .then(data => {
          setCharacters(data.results || []);
        })
        .catch(err => {
          setError('Failed to fetch characters.');
          console.error(err);
        })
        .finally(() => setLoading(false));
    } else {
      setCharacters([]);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const search = formData.get('search');
    setSearchParams({ q: search });
  };

  return (
    <div className="list-container">
      <h1>Search Characters</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          name="search"
          defaultValue={query}
          placeholder="Enter character name..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {loading && <Spinner />}
      {error && <ErrorBox message={error} />}

      {!loading && !error && (
        <>
          <ul className="character-grid">
            {characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </ul>
          {query && characters.length === 0 && (
            <p className="no-results">No characters found for "{query}".</p>
          )}
        </>
      )}
    </div>
  );
};

export default CharacterList;