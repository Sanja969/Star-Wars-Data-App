import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FilmsList from './FilmsList';

const Films = () => {
  const films = useSelector((state) => state.films);
  const characters = useSelector((state) => state.characters);
  const planets = useSelector((state) => state.planets);
  const ships = useSelector((state) => state.ships);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="text-white text-center pt-2">
      <div className="headline py-3">
        <h4>Star Wars Status</h4>
        <div className="d-flex flex-wrap justify-content-around">
          <div>
            <p className="h1 m-0">{films.length}</p>
            films
          </div>
          <div>
            <p className="h1 m-0">{characters.length}</p>
            characters
          </div>
          <div>
            <p className="h1 m-0">{planets.length}</p>
            planets
          </div>
          <div>
            <p className="h1 m-0">{ships.length}</p>
            ships
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between p-3 categories">
        <h4>Choose category:</h4>
        <div className="d-flex justify-content-around w-100">
          <button className="list-unstyled h5 btn btn-outline-info" type="button" onClick={() => navigate('/planets')}>Planets</button>
          <button className="list-unstyled h5 btn btn-outline-info" type="button" onClick={() => navigate('/characters')}>Characters</button>
          <button className="list-unstyled h5 btn btn-outline-info" type="button" onClick={() => navigate('/starships')}>Ships</button>
        </div>
      </div>
      <input
        type="search"
        className="search w-75 text-center"
        placeholder="Search..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <div className="w-100">
        <FilmsList films={films} searchValue={searchValue} />
      </div>

    </div>

  );
};

export default Films;
