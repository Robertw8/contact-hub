import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { persistConfig } from "./persistConfig";

const contactsInitialState = [];

const contactsSlice = createSlice({
	name: "contacts",
	initialState: contactsInitialState,
	reducers: {
		addContact: {
			reducer(state, action) {
				return [...Object.values(state), action.payload];
			},
			prepare(name, phone) {
				return {
					payload: {
						id: nanoid(),
						name,
						phone,
					},
				};
			},
		},
		deleteContact(state, action) {
			return Object.values(state).filter((contact) => contact.id !== action.payload);
		},
	},
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const getContacts = (state) => state.contacts;
