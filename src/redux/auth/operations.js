import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const setHeader = (token) => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearHeader = () => {
	axios.defaults.headers.common.Authorization = null;
};

const signup = createAsyncThunk("auth/signup", async (credentials, thunkAPI) => {
	try {
		const response = await axios.post("users/signup", credentials);

		setHeader(response.data.token);
		return response.data;
	} catch (error) {
		thunkAPI.rejectWithValue(error.message);
	}
});

const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
	try {
		const response = await axios.post("users/login", credentials);

		setHeader(response.data.token);
		return response.data;
	} catch (error) {
		thunkAPI.rejectWithValue(error.message);
	}
});

const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
	try {
		const response = await axios.post("users/logout");

		clearHeader();
		return response.data;
	} catch (error) {
		thunkAPI.rejectWithValue(error.message);
	}
});

const current = createAsyncThunk("auth/current", async (_, thunkAPI) => {
	try {
		const response = await axios.get("users/current");

		return response.data;
	} catch (error) {
		thunkAPI.rejectWithValue(error.message);
	}
});

export { signup, login, logout, current };
