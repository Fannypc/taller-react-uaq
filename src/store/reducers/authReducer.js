import { ActionTypes } from "../constants";

const initialState = {
  data: null,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, data: payload };
    case ActionTypes.LOGOUT:
      return { data: null, error: null };
    case ActionTypes.SET_ERROR:
      return { ...state, error: payload };
    case ActionTypes.CLEAR_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default reducer;
