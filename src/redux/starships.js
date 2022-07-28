const url = 'https://swapi.dev/api/starships/?page=';
const GET_SHIPS = 'GET_SHIPS';
const initialState = [];

const shipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHIPS:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].name === action.ships[0].name) {
          return state;
        }
      }
      return [...state, ...action.ships];

    default:
      return state;
  }
};

export default shipsReducer;

export const getShips = (page) => async (dispatch) => {
  const response = await fetch(`${url}${page}`);
  const json = await response.json();
  const result = json.results;
  const ships = result.map((data) => ({
    id: data.url.charAt(data.url.length - 3) === '/' ? data.url.charAt(data.url.length - 2) : `${data.url.charAt(data.url.length - 3)}${data.url.charAt(data.url.length - 2)}`,
    name: data.name,
    url: data.url,
    films: data.films,
    category: 'starships',
    created: data.created,
    class: data.starship_class,
    speed: data.max_atmosphering_speed,
    length: data.length,
    cost: data.cost_in_credit,
  }));

  dispatch({
    type: GET_SHIPS,
    ships,
  });
};
