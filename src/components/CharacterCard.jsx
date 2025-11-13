import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  return (
    <li className="character-card">
      <Link to={`/items/${character.id}`} className="card-link">
        <img src={character.image} alt={character.name} className="card-image" />
        <div className="card-info">
          <h3 className="card-name">{character.name}</h3>
          <p className="card-species">{character.species}</p>
        </div>
      </Link>
    </li>
  );
};

export default CharacterCard;