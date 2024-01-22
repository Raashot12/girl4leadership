import { Article } from 'types/merchSection';
import { baseApi as api } from './baseApi';

type ArticleData = {
  data: Article[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
export type ApiServicesAppGetBlogArgument = {
  searchParam?: string;
};
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    apiServicesAppBlogSearchApi: build.query<
      ArticleData,
      ApiServicesAppGetBlogArgument
    >({
      query: (queryArg) => ({
        url: `/api/blogs?populate=*&filters[summary][$contains]=${queryArg.searchParam}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useApiServicesAppBlogSearchApiQuery } = injectedRtkApi;
