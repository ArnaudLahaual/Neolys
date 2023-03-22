import './app.scss'
import Header from '../Header/header';
import React from 'react';
import Home from '../Home/home';
import Team from '../Home/Team/team';
import Services from '../Home/Services/services';
import SlideShow from '../Home/Slideshow/slideshow';
import Form from '../Home/Form/form';
import 'semantic-ui-css/semantic.min.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Atouts from '../Home/Atouts/atouts';
import Footer from '../Footer/footer';


function App() {

  const location = useLocation();

  useEffect(
    () => {
      // Ici on remonte le navigateur en haut
      window.scrollTo(0, 0);
    },
    // On rajoute une dépendance dans le tableau.
    // Du coup la callback au dessus se déclenchera à chaque modification de la valeur de location
    [location],
  );
    
  
  return (
    <div className="app">

        <Header />
        <Home />
        <Services />
        <Atouts />
        <Team />
        <SlideShow />
        <Form />
        <Footer />

    </div>
  );
}

export default App;
