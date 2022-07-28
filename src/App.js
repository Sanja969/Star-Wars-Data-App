import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/Navbar';
import Characters from './components/Characters';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Films from './components/Films';
import Detail from './components/Detail';
import { getCharacters } from './redux/characters';
import { getPlanets } from './redux/planets';
import { getFilms } from './redux/films';
import { getShips } from './redux/starships';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
    for (let i = 1; i <= 9; i += 1) {
      dispatch(getCharacters(i));
    }
    for (let i = 1; i <= 6; i += 1) {
      dispatch(getPlanets(i));
    }
    for (let i = 1; i <= 4; i += 1) {
      dispatch(getShips(i));
    }
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Films />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
