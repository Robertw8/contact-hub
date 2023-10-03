import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { persistConfig } from "./persistConfig";

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
export const persistedFilterReducer = persistReducer(persistConfig, filterSlice.reducer);
export const getFilter = (state) => state.filter;
