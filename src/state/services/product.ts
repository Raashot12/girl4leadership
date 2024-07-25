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
  'Product Category'?: string;
  'Publish Date'?: string;
  'Featured Image'?: Image[];
  Price?: number;
  'Seo keywords'?: string[];
  Tags?: string[];
  Likes?: number;
  'Product Name'?: string;
  'Product Details'?: string;
  'Featured Product'?: string[];
  'Available Colors'?: string[];
  'Product Images'?: Image[];
  currency?: string;
}
interface Record {
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
