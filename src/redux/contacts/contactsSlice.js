import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact, updateContact } from "./operations";

const initialState = {
	contacts: [],
	isLoading: false,
};

const handlePending = (state) => {
	state.isLoading = true;
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
			.addCase(getContacts.pending, (state, action) => {
				handlePending(state);
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.contacts.push(action.payload);
			})
			.addCase(addContact.pending, (state) => {
				handlePending(state);
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.contacts = state.contacts.filter((contact) => contact.id !== action.payload.id);
			})
			.addCase(deleteContact.pending, (state) => {
				handlePending(state);
			})
			.addCase(updateContact.fulfilled, (state, { id }) => {
				state.contacts = state.contacts.map((contact) => {
					return contact.id === id ? { contact } : contact;
				});
			})
			.addCase(updateContact.pending, (state) => {
				handlePending(state);
			});
	},
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts;
