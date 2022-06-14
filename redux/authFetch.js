import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const PORT = process.env.PORT || "https://list-contacts-test.herokuapp.com";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: "contactApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${PORT}/auth/`,

        //тут я создаю базовый хедерс для всех запросов вытягивая токен из стейта на любой глубине.

        prepareHeaders: (headers, { getState }) => {
            const token = getState().token;
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        tagTypes: ["curentUser"],
        registrationUser: builder.mutation({
            query: (newUser) => ({
                url: "/signup",
                method: "POST",
                body: newUser,
            }),
            invalidatesTags: ["contact", "user"],
        }),

        //запрос получение нового токена для работы пользователя с бэкендом
        loginUser: builder.mutation({
            query: (userData) => ({
                url: `/login`,
                method: "POST",
                body: userData,
            }),
            invalidatesTags: ["contact", "user"],
        }),

        //запрос для проверки валидный ли токен храниться в памяти для последующих запросов на бэкенд
        //отправляет только токен возвращает имя пользователя и эмеил

        getIsActivUser: builder.query({
            query: () => ({
                url: `/current`,
                method: "GET",
            }),
            providesTags: ["user"],
        }),
    }),
});

export const { useGetIsActivUserQuery, useRegistrationUserMutation, useLoginUserMutation } = authApi;
