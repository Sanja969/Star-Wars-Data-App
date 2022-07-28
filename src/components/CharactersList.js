import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../redux/detail';

const getCategoryList = (url, category) => {
  const names = [];
  for (let i = 0; i < category.length; i += 1) {
    for (let j = 0; j < url.length; j += 1) {
      if (category[i].url === url[j]) {
        names.push(category[i].name);
      }
    }
  }
  return names;
};

const CharactersList = (props) => {
  const { characters, searchValue } = props;
  const sorted = characters.sort((a, b) => ((a.id > b.id) ? 1 : -1));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showDetail = (obj) => {
    navigate('/detail');
    dispatch(getDetail(obj));
  };

  const planets = useSelector((state) => state.planets);
  const films = useSelector((state) => state.films);
  const ships = useSelector((state) => state.ships);

  const getPlanetName = (home) => {
    let planetName = '';
    for (let i = 0; i < planets.length; i += 1) {
      if (planets[i].url === home) {
        planetName = planets[i].name;
      }
    }
    return planetName;
  };

  return (
    sorted
      .filter((data) => data.name.toLowerCase().includes(searchValue.toLowerCase()))
      .map((data) => (
        <div key={data.id} className="card-char card-character px-2 text-end">
          <button
            onClick={() => showDetail({
              title: data.name,
              category: data.category,
              home: getPlanetName(data.home),
              films: getCategoryList(data.films, films),
              ships: getCategoryList(data.ships, ships),
              height: data.height,
              mass: data.mass,
              hair: data.hair,
              skin: data.skin,
              birth: data.birth,
              gender: data.gender,
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
              <small>{`${data.ships.length} ships`}</small>
            </div>
          </div>
        </div>
      ))
  );
};

export default CharactersList;
export { getCategoryList };
