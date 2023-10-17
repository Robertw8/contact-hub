import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";
import { authApi } from "./auth/operations";
import { contactsApi } from "./contacts/operations";
import { filterReducer } from "./filter/filterSlice";

const authConfig = {
	key: "auth",
	storage,
	whitelist: ["token"],
};

export const store = configureStore({
	reducer: {
		auth: persistReducer(authConfig, authReducer),
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
