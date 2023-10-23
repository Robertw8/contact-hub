import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = "";

const filterSlice = createSlice({
	name: "filter",
	initialState: filterInitialState,
	reducers: {
		setFilter: {
			reducer(state, action) {
				return action.payload;
			},
			prepare(input) {
				return {
					payload: input,
				};
			},
		},
	},
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const selectFilter = (state) => state.filter;
