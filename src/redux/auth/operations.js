import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "https://connections-api.herokuapp.com/users" }),
	endpoints: (builder) => ({
		signup: builder.mutation({
			query: (credentials) => ({
				url: "signup",
				method: "POST",
				body: credentials,
			}),
		}),
		login: builder.mutation({
			query: (credentials) => ({
				url: "login",
				method: "POST",
				body: credentials,
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: "logout",
				method: "POST",
			}),
		}),
		// current: builder.query({
		// 	query: () => ({ url: "current", providesTags: ["User"] }),
		// }),
	}),
});

export const { useSignupMutation, useLoginMutation, useLogoutMutation } = authApi;
