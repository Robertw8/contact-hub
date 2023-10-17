import { createSlice } from "@reduxjs/toolkit";

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

export const selectIsLoggedIn = (state) => !!state.auth.user;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
