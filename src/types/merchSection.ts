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
