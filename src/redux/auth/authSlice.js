import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import { signup, login, logout } from "./operations";

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
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(signup.fulfilled, (state, action) => {
				state.user = action.payload;
				state.token = action.payload;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload;
				state.token = action.payload;
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null;
				state.token = null;
			});
	},
});

export const persistedAuthReducer = persistReducer(authConfig, authSlice.reducer);

export const selectToken = (state) => state.auth.token;
export const selectUser = (state) => state.auth.user;
