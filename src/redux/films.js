const url = 'https://swapi.dev/api/films';
const GET_FILMS = 'GET_FILMS';
const initialState = [];

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return [...action.films];
    default:
      return state;
  }
};

export default filmsReducer;

export const getFilms = () => async (dispatch) => {
  const response = await fetch(url);
  const json = await response.json();
  const result = json.results;
  const films = result.map((data) => ({
    id: data.episode_id,
    name: data.title,
    url: data.url,
    episode: data.episode_id,
    director: data.director,
    producer: data.producer,
    releaseDate: data.release_date,
    characters: data.characters,
    planets: data.planets,
    starships: data.starships,
    category: 'films',
  }));

  dispatch({
    type: GET_FILMS,
    films,
  });
};
