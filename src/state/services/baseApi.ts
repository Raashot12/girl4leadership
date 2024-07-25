import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APP_API_SERVICE_BASE_URL,
    prepareHeaders(headers) {
      headers.set('Authorization', `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
