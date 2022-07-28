const url = 'https://swapi.dev/api/people/?page=';
const GET_CHARACTERS = 'GET_CHARACTERS';
const initialState = [];

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].name === action.characters[0].name) {
          return state;
        }
      }
      return [...state, ...action.characters];
    default:
      return state;
  }
};

export default charactersReducer;

export const getCharacters = (page) => async (dispatch) => {
  const response = await fetch(`${url}${page}`);
  const json = await response.json();
  const result = json.results;
  const characters = result.map((data) => ({
    id: data.url.charAt(data.url.length - 3) === '/' ? data.url.charAt(data.url.length - 2) : `${data.url.charAt(data.url.length - 3)}${data.url.charAt(data.url.length - 2)}`,
    name: data.name,
    url: data.url,
    home: data.homeworld,
    films: data.films,
    ships: data.starships,
    category: 'characters',
    height: data.height,
    mass: data.mass,
    hair: data.hair_color,
    skin: data.skin_color,
    birth: data.birth_year,
    gender: data.gender,
    cretaed: data.cretaed,
  }));

  dispatch({
    type: GET_CHARACTERS,
    characters,
  });
};
