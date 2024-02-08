import axios from 'axios';
import { operationWrapper, setToken, clearToken } from '../../utils';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const registerUser = operationWrapper(
  'auth/registerUser',
  async credentials => {
    const response = await axios.post('users/signup', credentials);

    setToken(response.data.token);
    return response.data;
  }
);

const loginUser = operationWrapper('auth/loginUser', async credentials => {
  const response = await axios.post('users/login', credentials);

  setToken(response.data.token);
  return response.data;
});

const logoutUser = operationWrapper('auth/logoutUser', async () => {
  const response = await axios.post('users/logout');

  clearToken();
  return response.data;
});

const getCurrentUser = operationWrapper(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) thunkAPI.rejectWithValue('Unable to get current user');
    setToken(token);

    const response = await axios.get('users/current');

    return response.data;
  }
);

export { registerUser, loginUser, logoutUser, getCurrentUser };
