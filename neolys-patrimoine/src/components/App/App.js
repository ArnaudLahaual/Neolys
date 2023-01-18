import './app.scss'
import Header from '../Header/header';
import React from 'react';
import Home from '../Home/home';
import Team from '../Home/Team/team';
import Services from '../Home/Services/services';
import SlideShow from '../Home/Slideshow/slideshow';


function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
      </header>
        <Home />
        <Team />
        <Services />
        <SlideShow />
    </div>
  );
}

export default App;
