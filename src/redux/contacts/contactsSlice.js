import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact, updateContact } from "./operations";

const initialState = {
	contacts: [
		{
			name: "pablo",
			phone: "333",
		},
	],
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getContacts.fulfilled, (state, action) => {
				state.contacts = action.payload;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.contacts.push(action.payload);
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.contacts.filter((contact) => contact.id !== action.payload.id);
			})
			.addCase(updateContact.fulfilled, (state, action) => {
				return action.payload;
			});
	},
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts;
