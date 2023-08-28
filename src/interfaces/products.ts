export interface IProduct {
  id: string;
  type: IType[];
  slug: string;
  title: string;
  price: number;
  sizes: ISize[];
  image: string;
  category: "men" | "women" | "kid" | "unisex";
  in_stock: number;
  updated_at: string;
  created_at: string;
  description: string;
}

export type ISize = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type IType = "shirts" | "pants" | "hoodies" | "hats";
