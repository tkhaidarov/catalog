export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface IProductsState {
  visibleCount: number;
  products: IProduct[];
}
