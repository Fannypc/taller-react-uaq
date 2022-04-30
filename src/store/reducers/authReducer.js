import { ActionTypes } from "../constants";

const reducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return payload;
    case ActionTypes.LOGOUT:
      return (state = null);
    default:
      return state;
  }
};

export default reducer;
