import { configureStore } from "@reduxjs/toolkit";
import { persistedContactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

export const store = configureStore({
	reducer: {
		contacts: persistedContactsReducer,
		filter: filterReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
