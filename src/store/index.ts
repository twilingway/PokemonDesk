import { combineReducers } from 'redux';
import app from './app';
import pokemons, { IPokemonsInitialState } from './pokemon';

export interface IInitialState {
  pokemons: IPokemonsInitialState;
}
const createRootReducer = () =>
  combineReducers({
    app,
    pokemons,
  });

export default createRootReducer;
