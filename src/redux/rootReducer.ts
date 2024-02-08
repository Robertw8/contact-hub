import { combineReducers } from '@reduxjs/toolkit';
import { persistedAuthReducer } from './auth';
import { contactsReducer } from './contacts';

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
