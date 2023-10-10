import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6524503fea560a22a4e9bb18.mockapi.io";

export const getContacts = createAsyncThunk("contacts/getContacts", async () => {
	try {
		const response = await axios.get("/contacts");

		return response.data;
	} catch (error) {
		console.warn(error);
	}
});

export const addContact = createAsyncThunk("contacts/addContact", async (contactData) => {
	try {
		const response = await axios.post("/contacts", contactData);

		return response.data;
	} catch (error) {
		console.warn(error);
	}
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id) => {
	try {
		const response = await axios.delete(`/contacts/${id}`);

		return response.data;
	} catch (error) {
		console.warn(error);
	}
});
