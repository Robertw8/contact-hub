import axios from 'axios';

const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

const getToken = () => {
  localStorage.getItem('auth');
};

export { setToken, clearToken, getToken };
