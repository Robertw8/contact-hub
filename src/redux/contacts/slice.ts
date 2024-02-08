import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
  type Contact,
  type ContactsInitialState,
  setFilter,
} from '.';

const initialState: ContactsInitialState = {
  contacts: [],
  isLoading: false,
  error: '',
  filter: '',
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
        state.isLoading = false;
        state.error = '';
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          (contact: Contact) => contact.id !== payload.id
        );
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(updateContact.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        const contactToUpdate = state.contacts.find(
          (contact: Contact) => contact.id === payload.id
        );

        if (contactToUpdate) {
          contactToUpdate.name = payload.name;
          contactToUpdate.number = payload.number;
        }

        state.isLoading = false;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(setFilter, (state, { payload }) => {
        state.filter = payload;
      });
  },
});

export const contactsReducer = slice.reducer;
