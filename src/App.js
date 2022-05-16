import React from 'react';
import './App.css';
import Header from './src./components./Header.jsx';
import Navbar from './src./components./Navbar.jsx';
import Profile from './src./components./Profile.jsx';

function App() {
  return(
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
