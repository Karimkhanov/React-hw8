import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { rickAndMortyService } from '../services/rickAndMortyService';
import Spinner from '../components/Spinner';
import ErrorBox from '../components/ErrorBox';
import './CharacterDetails.css';

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    rickAndMortyService.getCharacterById(id)
      .then(data => setCharacter(data))
      .catch(err => {
        setError('Character not found or an error occurred.');
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <ErrorBox message={error} />;
  if (!character) return <ErrorBox message="Character not found." />;

  return (
    <div className="details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        &larr; Back
      </button>
      <div className="details-card">
        <img src={character.image} alt={character.name} className="details-image" />
        <div className="details-info">
          <h1>{character.name}</h1>
          <ul>
            <li><strong>Status:</strong> {character.status}</li>
            <li><strong>Species:</strong> {character.species}</li>
            <li><strong>Type:</strong> {character.type || 'N/A'}</li>
            <li><strong>Gender:</strong> {character.gender}</li>
            <li><strong>Origin:</strong> {character.origin.name}</li>
            <li><strong>Last Known Location:</strong> {character.location.name}</li>
            <li><strong>Number of Episodes:</strong> {character.episode.length}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;