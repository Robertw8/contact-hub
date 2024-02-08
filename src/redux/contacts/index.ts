export { contactsReducer } from './slice';
export {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
  setFilter,
} from './operations';
export type { Contact, ContactsInitialState } from './types';
export {
  selectContacts,
  selectIsLoading,
  selectFilter,
  selectError,
} from './selectors';
