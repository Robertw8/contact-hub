import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { persistedAuthReducer } from "./auth/authSlice";
import { authApi } from "./auth/operations";
import { contactsApi } from "./contacts/operations";
import { filterReducer } from "./filter/filterSlice";

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		contacts: contactsApi.reducer,
		filter: filterReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(authApi.middleware),
});

export const persistor = persistStore(store);
