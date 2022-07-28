import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PlanetsList from './PlanetsList';

const Planets = () => {
  const planets = useSelector((state) => state.planets);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="text-white pt-4 text-center">
      <div className="ps-3 d-flex align-items-center">
        <button className="h1" type="button" onClick={() => navigate('/')}>⇦</button>
        <h4 className="ps-5 ms-5">Planets</h4>
      </div>
      <input
        type="search"
        className="search w-75 text-center"
        placeholder="Search..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <div className="d-flex flex-wrap w-100">
        <PlanetsList planets={planets} searchValue={searchValue} />
      </div>
    </div>
  );
};

export default Planets;
