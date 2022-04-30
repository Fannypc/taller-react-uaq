import { ActionTypes } from "../constants/index";
import { login, register, logout } from "../services/authService";

export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};

export const logoutUser = () => {
  return {
    type: ActionTypes.LOGOUT,
  };
};

export const setError = (err) => {
  return {
    type: ActionTypes.SET_ERROR,
    payload: err,
  };
};

export const clearError = () => {
  return {
    type: ActionTypes.CLEAR_ERROR,
  };
};

export const loginUser = (info) => {
  return async (dispatch) => {
    try {
      const { data } = await login(info);
      window.localStorage.setItem("token", data.token);
      dispatch(setUser(data));
    } catch (err) {
      dispatch(setError(err.response?.data?.message || "Something went wrong"));
    }
  };
};

export const registerUser = (info) => {
  return async (dispatch) => {
    try {
      const { data } = await register(info);
      window.localStorage.setItem("token", data.token);
      dispatch(setUser(data));
    } catch (err) {
      dispatch(setError(err.response?.data?.message || "Something went wrong"));
    }
  };
};

export const doLogout = () => {
  return async (dispatch) => {
    try {
      await logout();
      window.localStorage.clear();
      dispatch(logoutUser());
    } catch (err) {
      dispatch(setError(err.response?.data?.message || "Something went wrong"));
    }
  };
};
