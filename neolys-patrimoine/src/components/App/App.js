import './app.scss'
import Header from '../Header/header';
import React from 'react';
import Home from '../Home/home';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Routes, Switch, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../Footer/footer';
import { useSelector } from 'react-redux';
import Mentions from '../Footer/Mentions/mentions';
import Cgu from '../Footer/CGU/cgu';
import Confident from '../Footer/Confident/confident';

function App() {

  const location = useLocation();
  const loading = useSelector((state) => state.neolys.loading);
  console.log(loading);

  useEffect(
    () => {
      // Ici on remonte le navigateur en haut
      window.scrollTo(0, 0);
    },
    // On rajoute une dépendance dans le tableau.
    // Du coup la callback au dessus se déclenchera à chaque modification de la valeur de location
    [location],
  );

  return  (

    <div className="app" id='app'>
          <Header />
            <main>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/mentions" element={<Mentions />} />
                <Route path="/cgu" element={<Cgu />} />
                <Route path="/confident" element={<Confident />} />
              </Routes>
            </main>
          <Footer />

    </div>
  );
}

export default App;
