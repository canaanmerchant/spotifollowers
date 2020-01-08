import React from 'react';
import logo from './logo.svg';
import './App.css';
import Picture from './assets/picture.jpg';
import Counter from './components/counter.component';




function App() { 
  return (
   <div>
     <h2>Follow Us on Spotify!</h2>
      <div>
        <img src={Picture} />
        <Counter />
      </div>
   </div>
  );
}

export default App;
