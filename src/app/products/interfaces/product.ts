export interface IProduct {
  id: number;
  title: string;
  description: string;
  photo: string;
  price: number;
  type: string;
  inCart?: boolean;
}

export interface ICart extends IProduct {
  count: number;
}
