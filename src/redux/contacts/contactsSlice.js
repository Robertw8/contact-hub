import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
	name: "contacts",
	initialState: {
		contacts: [],
	},
	reducers: {
		addContact: (state, action) => {
			state.contacts.push(action.payload);
		},
		deleteContact: (state, action) => {
			state.contacts.filter((contact) => contact.id !== action.payload.id);
		},
	},
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts;
