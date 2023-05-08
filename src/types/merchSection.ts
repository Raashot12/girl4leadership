export interface CategoriesType {
  id: number;
  bgImg: string[];
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
