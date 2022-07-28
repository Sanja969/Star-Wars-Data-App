import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import charactersReducer from './characters';
import planetsReducer from './planets';
import filmsReducer from './films';
import shipsReducer from './starships';
import detailReducer from './detail';

const rootReducer = combineReducers({
  characters: charactersReducer,
  planets: planetsReducer,
  films: filmsReducer,
  ships: shipsReducer,
  detail: detailReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
