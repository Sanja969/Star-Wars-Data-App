const GET_CONTENT = 'GET_CONTENT';
const initialState = {};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return { ...action.obj };
    default:
      return state;
  }
};

export default detailReducer;

export const getDetail = (obj) => ({ type: GET_CONTENT, obj });
