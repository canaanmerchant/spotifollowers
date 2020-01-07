import React from 'react';
import logo from './logo.svg';
import './App.css';
import Picture from './assets/picture.jpg';




function App() { 
  return (
   <div>
     <h2>Follow Us on Spotify!</h2>
      <div>
        <img src={Picture} />
      </div>
   </div>
  );
}

export default App;
