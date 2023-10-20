import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { persistedAuthReducer } from "./auth/authSlice";
import { filterReducer } from "./filter/filterSlice";
import { contactsReducer } from "./contacts/contactsSlice";

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		contacts: contactsReducer,
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
