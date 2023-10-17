import { createSlice } from "@reduxjs/toolkit";
import { contactsApi } from "./operations";

const contactsSlice = createSlice({
	name: "contacts",
	initialState: contactsApi.endpoints.getContacts.select(),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addMatcher(contactsApi.util.isAnyOf(getContacts, addContact, deleteContact).pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addMatcher(contactsApi.util.isAnyOf(getContacts, addContact, deleteContact).fulfilled, (state, action) => {
				state.isLoading = false;
				state.contacts = action.payload;
			})
			.addMatcher(contactsApi.util.isAnyOf(getContacts, addContact, deleteContact).rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			});
	},
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts;
