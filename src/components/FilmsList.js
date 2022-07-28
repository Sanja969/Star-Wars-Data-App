import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../redux/detail';
import { getCategoryList } from './CharactersList';

const FilmsList = (props) => {
  const { films, searchValue } = props;
  const sorted = films.sort((a, b) => ((a.id > b.id) ? 1 : -1));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const planets = useSelector((state) => state.planets);
  const characters = useSelector((state) => state.characters);
  const ships = useSelector((state) => state.ships);

  const showDetail = (obj) => {
    navigate('/detail');
    dispatch(getDetail(obj));
  };

  return (
    sorted
      .filter((data) => data.name.toLowerCase().includes(searchValue.toLowerCase()))
      .map((data) => (
        <div key={data.id} className="px-2 text-end film-card">
          <button
            onClick={() => showDetail({
              title: data.name,
              category: data.category,
              planets: getCategoryList(data.planets, planets),
              characters: getCategoryList(data.characters, characters),
              ships: getCategoryList(data.starships, ships),
              episode: data.id,
              director: data.director,
              producer: data.producer,
              release: data.releaseDate,
            })}
            className="h1 pb-4 bt-1"
            type="button"
          >
            ➩
          </button>
          <div className="d-flex flex-column justify-content-end">
            <h2 className="text-end pb-3">{data.name}</h2>
            <div className="d-flex flex-wrap justify-content-around">
              <small>{`${data.planets.length} planets`}</small>
              <small>{`${data.characters.length} characters`}</small>
              <small>{`${data.starships.length} starships`}</small>
            </div>
          </div>
        </div>
      ))
  );
};

export default FilmsList;
