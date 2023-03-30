import api from '../../app/api';

const exampleApi = api.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query({
      query: () => 'https://jsonplaceholder.typicode.com/posts',
    }),
  }),
});

export const { useGetPostsQuery } = exampleApi;
