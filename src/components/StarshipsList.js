import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../redux/detail';
import { getCategoryList } from './CharactersList';

const StarshipsList = (props) => {
  const { ships, searchValue } = props;
  const sorted = ships.sort((a, b) => ((a.id > b.id) ? 1 : -1));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const films = useSelector((state) => state.films);

  const showDetail = (obj) => {
    navigate('/detail');
    dispatch(getDetail(obj));
  };

  return (
    sorted
      .filter((data) => data.name.toLowerCase().includes(searchValue.toLowerCase()))
      .map((data) => (
        <div key={data.id} className="card-char card-ships w-50 px-2 text-end">
          <button
            onClick={() => showDetail({
              title: data.name,
              category: data.category,
              films: getCategoryList(data.films, films),
              creted: data.created,
              length: data.length,
              speed: data.speed,
              class: data.class,
              cost: data.cost,
            })}
            className="h1 pb-3"
            type="button"
          >
            ➩
          </button>
          <div className="d-flex flex-column justify-content-end">
            <h5 className="text-end pb-3">{data.name}</h5>
            <div className="d-flex justify-content-end">
              <small>{`${data.films.length} films`}</small>
            </div>
          </div>
        </div>
      ))
  );
};

export default StarshipsList;
