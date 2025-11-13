import React from 'react';
import './Home.css';
import homeImage from '../assets/rick-and-morty.png'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Rick and Morty Fan App</h1>
      <p>
        Explore characters from the Rick and Morty universe. You can search for
        your favorite characters and view their details.
      </p>
      <img src={homeImage} alt="Rick and Morty" className="home-image" />
    </div>
  );
};

export default Home;