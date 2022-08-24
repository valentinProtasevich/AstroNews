import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.spaceflightnewsapi.net/v3/'}),
  endpoints: (build) => ({
    getNews: build.query({
      query: () => 'articles',
    })
  })
});

export const {useGetNewsQuery} = newsApi;