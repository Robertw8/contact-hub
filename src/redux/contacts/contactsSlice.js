import { createSlice } from "@reduxjs/toolkit";
import {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
} from "./operations";

const initialState = {
  contacts: [],
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(getContacts.pending, state => {
        handlePending(state);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addContact.pending, state => {
        handlePending(state);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        handlePending(state);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const contactToUpdate = state.contacts.find(
          contact => contact.id === action.payload.id
        );

        contactToUpdate.name = action.payload.name;
        contactToUpdate.number = action.payload.number;
        state.isLoading = false;
      })
      .addCase(updateContact.pending, state => {
        handlePending(state);
      })
      .addCase(updateContact.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
