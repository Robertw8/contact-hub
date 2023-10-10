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
		const handlePending = (state) => {
			state.isLoading = true;
		};

		const handleFulfilled = (state, action) => {
			state.contacts = action.payload;
			state.isLoading = false;
			state.error = null;
		};

		const handleRejected = (state, action) => {
			state.error = action.error.message;
			state.isLoading = false;
		};

		builder
			.addCase(getContacts.pending, handlePending)
			.addCase(getContacts.fulfilled, handleFulfilled)
			.addCase(getContacts.rejected, handleRejected)
			.addCase(addContact.pending, handlePending)
			.addCase(addContact.fulfilled, (state, action) => {
				state.contacts.push(action.payload);
				state.isLoading = false;
				state.error = null;
			})
			.addCase(addContact.rejected, handleRejected)
			.addCase(deleteContact.pending, handlePending)
			.addCase(deleteContact.fulfilled, (state, action) => {
				const deletedContactId = action.payload.id;
				state.contacts = state.contacts.filter((contact) => contact.id !== deletedContactId);
				state.isLoading = false;
				state.error = null;
			})
			.addCase(deleteContact.rejected, handleRejected);
	},
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts;
