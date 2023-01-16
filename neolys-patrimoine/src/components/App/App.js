import './app.scss'
import Header from '../Header/header';
import React from 'react';
import Home from '../Home/home';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
      </header>
        <Home />
    </div>
  );
}

export default App;
