import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../redux/detail';
import { getCategoryList } from './CharactersList';

const PlanetsList = (props) => {
  const { planets, searchValue } = props;
  const sorted = planets.sort((a, b) => ((a.id > b.id) ? 1 : -1));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const films = useSelector((state) => state.films);
  const characters = useSelector((state) => state.characters);

  const showDetail = (obj) => {
    navigate('/detail');
    dispatch(getDetail(obj));
  };

  return (
    sorted
      .filter((data) => data.name.toLowerCase().includes(searchValue.toLowerCase()))
      .map((data) => (
        <div key={data.id} className="card-char card-planets w-50 px-2 text-end">
          <button
            onClick={() => showDetail({
              title: data.name,
              category: data.category,
              films: getCategoryList(data.films, films),
              characters: getCategoryList(data.characters, characters),
              diameter: data.diameter,
              terrain: data.terrain,
              gravity: data.gravity,
              climate: data.climate,
              water: data.water,
              population: data.population,
              created: data.created,
            })}
            className="h1 pb-3"
            type="button"
          >
            ➩
          </button>
          <div className="d-flex flex-column justify-content-end">
            <h5 className="text-end pb-3">{data.name}</h5>
            <div className="d-flex justify-content-between">
              <small>{`${data.films.length} films`}</small>
              <small>{`${data.characters.length} characters`}</small>
            </div>
          </div>
        </div>
      ))
  );
};

export default PlanetsList;
