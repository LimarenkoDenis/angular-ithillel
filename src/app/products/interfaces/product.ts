export interface IProductBase {
  title: string;
  description: string;
  photo: string;
  price: number;
  type: string;
}


export interface IProduct extends IProductBase {
  id: number;
  inCart?: boolean;
}

export interface IProductForCreate extends IProductBase {
}

export type IProductToUpdate = Partial<IProductForCreate>;

export interface ICart extends IProduct {
  count: number;
}
