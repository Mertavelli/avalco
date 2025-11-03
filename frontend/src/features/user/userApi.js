import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getUsers: builder.query({
            query: () => `/api/users/all-user`,
            providesTags: ["getInvoices"],
        }),

        getUser: builder.query({
            query: () => `/api/users/single-user`,
            providesTags: ["getUser"],
        }),
        getUserByUsername: builder.query({
            query: (username) => `/api/users/${username}`,
        }),
    }),
});

export const { useGetUsersQuery, useGetUserQuery, useGetUserByUsernameQuery } = userApi;
