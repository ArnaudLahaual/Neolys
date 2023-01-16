import './app.scss'
import Header from '../Header/header';
import React from 'react';
import Home from '../Home/home';
import Team from '../Home/Team/team';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
      </header>
        <Home />
        <Team />
    </div>
  );
}

export default App;
