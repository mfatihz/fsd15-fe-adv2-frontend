import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_API_URL;

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getHero: builder.query({
            query: (page) => `/hero/${page}`,
        }),
        getGalleries: builder.query({
            query: ({ page, genreId }) => ({
                url: genreId ? `/galleries/${page}/genre/${genreId}` : `/galleries/${page}`
            }),
        }),
    }),
});

export const { useGetHeroQuery, useGetGalleriesQuery } = apiSlice;