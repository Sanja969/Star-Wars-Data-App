import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CharactersList from './CharactersList';

const Characters = () => {
  const characters = useSelector((state) => state.characters);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="pt-4 text-center">
      <div className="ps-3 d-flex align-items-center">
        <button className="h1" type="button" onClick={() => navigate('/')}>⇦</button>
        <h4 className="ps-5 ms-5">Characters</h4>
      </div>
      <input
        type="search"
        className="search w-75 text-center"
        placeholder="Search..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <div className="d-flex flex-wrap w-100">
        <CharactersList characters={characters} searchValue={searchValue} />
      </div>
    </div>
  );
};

export default Characters;
