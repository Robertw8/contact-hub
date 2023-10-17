import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "https://connections-api.herokuapp.com" }),
	endpoints: (builder) => ({
		getContacts: builder.query({
			query: () => "contacts",
		}),
		addContact: builder.mutation({
			query: (contactData) => ({
				url: "contacts",
				method: "POST",
				body: contactData,
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
