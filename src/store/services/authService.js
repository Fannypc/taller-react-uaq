import axios from "../../utils/axios";

export const login = async function (data) {
  return await axios.post(`/login`, data);
};

export const register = async function (data) {
  return await axios.post(`/register`, data);
};

export const logout = async function () {
  return await axios.get(`/logout`);
};
