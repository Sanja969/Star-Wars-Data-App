import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  const detail = useSelector((state) => state.detail);
  const navigate = useNavigate();
  const goBack = (category) => {
    if (category === 'films') {
      navigate('/');
    } else {
      navigate(`/${category}`);
    }
  };
  return (
    <div className="pt-2">
      <div className="d-flex detail align-items-center">
        <button className="h1 px-2" type="button" onClick={() => goBack(detail.category)}>⇦</button>
        <h1 className="px-2 ps-5">{detail.title}</h1>
      </div>
      <div className="detail-info">
        {detail.height ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Height: ${detail.height}`}</p> : <></>}
        {detail.mass ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Mass: ${detail.mass}`}</p> : <></>}
        {detail.hair ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Hair: ${detail.hair}`}</p> : <></>}
        {detail.skin ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Skin: ${detail.skin}`}</p> : <></>}
        {detail.birth ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Birth: ${detail.birth}`}</p> : <></>}
        {detail.gender ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Gender: ${detail.gender}`}</p> : <></>}
        {detail.home ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Homeworld: ${detail.home}`}</p> : <></>}

        {detail.diameter ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Diameter: ${detail.diameter}`}</p> : <></>}
        {detail.terrain ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Terrain: ${detail.terrain}`}</p> : <></>}
        {detail.gravity ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Gravity: ${detail.gravity}`}</p> : <></>}
        {detail.climate ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Climate: ${detail.climate}`}</p> : <></>}
        {detail.water ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Surface Water: ${detail.water}`}</p> : <></>}
        {detail.population ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Population: ${detail.population}`}</p> : <></>}
        {detail.created ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Created: ${detail.created}`}</p> : <></>}

        {detail.class ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Diameter: ${detail.class}`}</p> : <></>}
        {detail.speed ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Max atmosphering speed: ${detail.speed}`}</p> : <></>}
        {detail.length ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Length: ${detail.length}`}</p> : <></>}
        {detail.cost ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Cost in credit: ${detail.cost}`}</p> : <></>}
        {detail.created ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Surface Water: ${detail.created}`}</p> : <></>}

        {detail.episode ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Episode: ${detail.episode}`}</p> : <></>}
        {detail.director ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Director: ${detail.director}`}</p> : <></>}
        {detail.producer ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Producer: ${detail.producer}`}</p> : <></>}
        {detail.release ? <p className="h5 border m-0 py-3 border-bottom-0 px-2">{`Release Date: ${detail.release}`}</p> : <></>}

        {detail.films
          ? (
            <div className="border m-0 py-3 border-bottom-0 px-2">
              <h5>Films:</h5>
              <ul>{detail.films.map((data) => <li key={data}>{data}</li>)}</ul>
            </div>
          )
          : <></>}
        {detail.planets
          ? (
            <div className="border m-0 py-3 border-bottom-0 px-2">
              <h5>Planets:</h5>
              <ul>{detail.planets.map((data) => <li key={data}>{data}</li>)}</ul>
            </div>
          )
          : <></>}
        {detail.characters
          ? (
            <div className="border m-0 py-3 border-bottom-0 px-2">
              <h5>Characters:</h5>
              <ul>{detail.characters.map((data) => <li key={data}>{data}</li>)}</ul>
            </div>
          )
          : <></>}
        {detail.ships
          ? (
            <div className="border m-0 py-3 border-bottom-0 px-2">
              <h5>Ships:</h5>
              <ul>{detail.ships.map((data) => <li key={data}>{data}</li>)}</ul>
            </div>
          )
          : <></>}
      </div>
    </div>

  );
};

export default Detail;
