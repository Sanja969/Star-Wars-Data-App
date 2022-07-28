const url = 'https://swapi.dev/api/planets/?page=';
const GET_PLANETS = 'GET_PLANETS';
const initialState = [];

const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANETS:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].name === action.planets[0].name) {
          return state;
        }
      }
      return [...state, ...action.planets];

    default:
      return state;
  }
};

export default planetsReducer;

export const getPlanets = (page) => async (dispatch) => {
  const response = await fetch(`${url}${page}`);
  const json = await response.json();
  const result = json.results;
  const planets = result.map((data) => ({
    id: data.url.charAt(data.url.length - 3) === '/' ? data.url.charAt(data.url.length - 2) : `${data.url.charAt(data.url.length - 3)}${data.url.charAt(data.url.length - 2)}`,
    name: data.name,
    url: data.url,
    category: 'planets',
    characters: data.residents,
    films: data.films,
    diameter: data.diameter,
    terrain: data.terrain,
    gravity: data.gravity,
    climate: data.climate,
    population: data.population,
    created: data.created,
    water: data.surface_water,
  }));

  dispatch({
    type: GET_PLANETS,
    planets,
  });
};
