import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const getContacts = createAsyncThunk("contacts/getContacts", async (_, thunkAPI) => {
	try {
		const response = await axios.get("contacts");

		return response.data;
	} catch (error) {
		thunkAPI.rejectWithValue(error.message);
	}
});

const addContact = createAsyncThunk("contacts/addContact", async (user, thunkAPI) => {
	try {
		const response = await axios.post("contacts", user);

		return response.data;
	} catch (error) {
		thunkAPI.rejectWithValue(error.message);
	}
});

const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
	try {
		const response = await axios.post(`contacts/${contactId}`);

		return response.data;
	} catch (error) {
		thunkAPI.rejectWithValue(error.message);
	}
});

const updateContact = createAsyncThunk("contacts/updateContact", async (contactId, thunkAPI) => {
	try {
		const response = await axios.put(`contacts/${contactId}`);

		return response.data;
	} catch (error) {
		thunkAPI.rejectWithValue(error.message);
	}
});

export { getContacts, addContact, deleteContact, updateContact };
