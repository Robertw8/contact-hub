import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

const authConfig = {
	key: "auth",
	storage,
	whitelist: ["token"],
};

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		token: null,
	},
	reducers: {
		setCredentials: (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		clearCredentials: (state) => {
			state.user = null;
			state.token = null;
		},
	},
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export const persistedAuthReducer = persistReducer(authConfig, authSlice.reducer);

export const selectToken = (state) => state.auth.token;
export const selectUser = (state) => state.auth.user;
