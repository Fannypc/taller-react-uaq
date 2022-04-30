import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import pokemonReducer from "./pokemonReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
  account: accountReducer,
  pokemons: pokemonReducer,
  user: authReducer,
});

export default reducers;
