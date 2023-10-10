import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "../operations";

const contactsInitialState = {
	contacts: [],
	isLoading: false,
	error: null,
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState: contactsInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getContacts.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getContacts.fulfilled, (state, action) => {
				state.contacts = action.payload;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(getContacts.rejected, (state, action) => {
				state.error = action.error.message;
				state.isLoading = false;
			})
			.addCase(addContact.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.contacts.push(action.payload);
				state.isLoading = false;
				state.error = null;
			})
			.addCase(addContact.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			})
			.addCase(deleteContact.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				const deletedContactId = action.payload.id;

				state.contacts = state.contacts.filter((contact) => contact.id !== deletedContactId);
				state.isLoading = false;
				state.error = null;
			})
			.addCase(deleteContact.rejected, (state, action) => {
				state.error = action.error.message;
				state.isLoading = false;
			});
	},
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts;
