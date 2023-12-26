/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CategoriesType {
  id: number;
  bgImg: {
    id: number;
    type: string | null;
    image: string;
  }[];
  isSale: boolean;
  name: string;
  amount: string;
  star: number;
  categories: string;
  modalCategories: string[];
  size: string[];
  color:
    | {
        type: string;
        image: string[];
      }[]
    | string[];
}
export type Article = {
  id: number;
  attributes: {
    Title: string;
    Category: string;
    Summary: string;
    IsFeatured: boolean;
    TimeStamp: string;
    Content: any[]; // Replace `any` with the actual type if you know the structure of the Content array
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Thumbnail: any; // Replace `any` with the actual type for Thumbnail if you know it
    author: any; // Replace `any` with the actual type for author if you know it
    FeaturedImage: any; // Replace `any` with the actual type for FeaturedImage if you know it
  };
};
