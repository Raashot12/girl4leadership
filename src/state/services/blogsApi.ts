import { baseApi as api } from './baseApi';

type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

type Image = {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: {
    small: Thumbnail;
    large: Thumbnail;
    full: Thumbnail;
  };
};

type RecordFields = {
  TimeStamp: string;
  Title: string;
  Subtitle: string;
  Author: string;
  Profession: string;
  Content: string;
  Category: string;
  slug: string;
  FeaturedImage: Image[];
  AuthorImage: Image[];
  isFeatured: boolean;
};

export type Record = {
  id: string;
  createdTime: string;
  fields: RecordFields;
};

export type Records = {
  records: Record[];
};
export type ApiServicesAppGetBlogArgument = {
  searchParam?: string;
};
export type ApiServicesAppGetBlogDetailsArg = {
  singleId?: string;
};
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    apiServicesAppBlogSearchApi: build.query<
      Records,
      ApiServicesAppGetBlogArgument
    >({
      query: () => ({
        url: `/app19Sad2e2jD7Cti/Blog`,
        method: 'GET',
      }),
    }),
    apiServicesAppBlogSingleDataApi: build.query<
      Record,
      ApiServicesAppGetBlogDetailsArg
    >({
      query: (param) => ({
        url: `/app19Sad2e2jD7Cti/Blog/${param.singleId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useApiServicesAppBlogSearchApiQuery,
  useApiServicesAppBlogSingleDataApiQuery,
} = injectedRtkApi;
