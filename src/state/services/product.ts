/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi as api } from './baseApi';

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Image {
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
}

interface RecordFields {
  Description?: string;
  ProductCategory?: string;
  PublishDate?: string;
  FeaturedImage?: Image[];
  Price?: number;
  Seokeywords?: string[];
  Tags?: string[];
  Likes?: number;
  Categories: string;
  IsSalesTag: boolean;
  ProductName?: string;
  ProductDetails?: string;
  FeaturedProduct?: string[];
  AvailableColors?: string[];
  ProductImages?: Image[];
  currency?: string;
}
export interface Record {
  id: string;
  createdTime: string;
  fields: RecordFields;
}

interface Data {
  records: Record[];
}
export type ApiServicesAppGetBlogArgument = {
  searchParam?: string;
};
const baseId = 'apppORvMVTHi8CpJl';
const tableName = 'Product';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    apiServicesAppProductListApi: build.query<Data, any>({
      query: () => ({
        url: `/${baseId}/${tableName}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useApiServicesAppProductListApiQuery } = injectedRtkApi;
