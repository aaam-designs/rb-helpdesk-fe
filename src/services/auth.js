import axios from "axios";

// const baseURL = "https://5747-103-41-37-6.ngrok-free.app/api/v1";
const baseURL = "http://localhost:4000/api/v1";

const register = async (user) => {
  const userData = await axios.post(`${baseURL}/auth/register`, user);
  return userData.data;
};

const getMe = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const userData = await axios.get(`${baseURL}/auth/me`, config);
  return userData.data;
};

const login = async (user) => {
  const userData = await axios.post(`${baseURL}/auth/login`, user);
  return userData.data;
};

const logout = async () => {
  const userData = await axios.get(`${baseURL}/auth/logout`);
  return userData.data;
};

export { register, getMe, login, logout };
