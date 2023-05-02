export interface CategoriesType {
  id: number;
  bgImg: string[];
  isSale: boolean;
  name: string;
  amount: string;
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
