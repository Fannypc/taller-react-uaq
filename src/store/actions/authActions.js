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

export const loginUser = (info) => {
  return async (dispatch) => {
    const { data } = await login(info);
    window.localStorage.setItem("token", data.token);
    dispatch(setUser(data));
  };
};

export const registerUser = (info) => {
  return async (dispatch) => {
    const { data } = await register(info);
    window.localStorage.setItem("token", data.token);
    dispatch(setUser(data));
  };
};

export const doLogout = () => {
  return async (dispatch) => {
    await logout();
    console.log("dentro del action para logout");
    window.localStorage.clear();
    dispatch(logoutUser());
  };
};
