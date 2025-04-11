import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        checkEmail: builder.mutation({
            query: (email) => ({
                url: `/api/auth/check-email`,
                method: "POST",
                body: { email },
            }),
        }),

        register: builder.mutation({
            query: (data) => ({
                url: "/api/auth/register",
                method: "POST",
                body: data,
            }),
        }),

        sendCode: builder.mutation({
            query: (data) => ({
                url: "/api/auth/register/send-code",
                method: "POST",
                body: data,
            }),
        }),

        login: builder.mutation({
            query: (data) => ({
                url: "/api/auth/login",
                method: "POST",
                body: data,
            }),

            onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
                try {
                    const result = await queryFulfilled;

                    // set data in localstorage
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.token,
                            user: result.data.user,
                        })
                    );

                    // dispatch userLoggedIn action
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.token,
                            user: result.data.user, // Hier wird das angemeldete User objekt mit den daten gefüllt
                        })
                    );
                } catch (err) {
                    // do nothing
                    console.log(err);
                }
            },
        }),
    }),
});

export const { useLoginMutation, useCheckEmailMutation, useRegisterMutation, useSendCodeMutation } = authApi;
