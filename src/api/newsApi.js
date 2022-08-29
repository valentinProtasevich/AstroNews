import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.spaceflightnewsapi.net/v3/'}),
  endpoints: (build) => ({
    getNews: build.query({
      query: (limit = '') => `articles?${limit && `_limit=${limit}`}`,
    }),
    getBlogs: build.query({
      query: (limit = '') => `blogs?${limit && `_limit=${limit}`}`,
    }),
    getReports: build.query({
      query: (limit = '') => `reports?${limit && `_limit=${limit}`}`,
    }),
  })
});

export const {useGetNewsQuery, useGetBlogsQuery, useGetReportsQuery} = newsApi;