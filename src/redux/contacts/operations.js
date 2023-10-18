import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "https://connections-api.herokuapp.com/" }),
	endpoints: (builder) => ({
		getContacts: builder.query({
			query: (token) => ({
				url: "contacts",
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
		}),
		addContact: builder.mutation({
			query: (contactData, token) => ({
				url: "contacts",
				method: "POST",
				body: contactData,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
		}),
		deleteContact: builder.mutation({
			query: (id) => ({
				url: `contacts/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;
