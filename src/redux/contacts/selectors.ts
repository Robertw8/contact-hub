import { RootState } from '..';

export const selectContacts = (state: RootState) => state.contacts.contacts;
export const selectIsLoading = (state: RootState) => state.contacts.isLoading;
export const selectFilter = (state: RootState) => state.contacts.filter;
export const selectError = (state: RootState) => state.contacts.error;
